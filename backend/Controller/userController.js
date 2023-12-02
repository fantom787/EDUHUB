import { CatchAsyncError } from "../Middleware/CatchAsyncErrors.js";
import ErrorHandler from "../Utils/ErrorHandler.js";
import { User } from "../Model/UserModal.js";
import { sendToken } from "../Utils/sendToken.js";
import { sendEmail } from "../Utils/sendEmail.js";
import crypto from "crypto";
import { Course } from "../Model/CourseModel.js";

export const register = CatchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;
  //   const file = req.file;
  if (!name || !email || !password) {
    return next(new ErrorHandler("Please Enter All Feilds", 400));
  }

  let user = await User.findOne({ email });

  if (user) {
    return next(new ErrorHandler("User Already Exits", 409));
  }

  // upload file on cloudinary

  user = await User.create({
    name,
    email,
    password,
    avtar: {
      public_id: "tempid",
      url: "tempurl",
    },
  });
  sendToken(res, user, "Registered Successfully", 201);
});

export const login = CatchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  //   const file = req.file;
  console.log("email: " + email + " password: " + password);
  if (!email || !password) {
    return next(new ErrorHandler("Please Enter All Feilds", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Incorrect Email or Password", 401));
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return next(new ErrorHandler("Incorrect Email or Password", 401));
  }

  sendToken(res, user, `Welcome Back ${user.name}`, 200);
});

export const logout = CatchAsyncError(async (req, res, next) => {
  const options = {
    expires: new Date(Date.now()),
    httpOnly: true,
    // secure: true,
    sameSite: "none",
  };
  res.status(200).cookie("token", null, options).json({
    success: true,
    message: "Logged Out Successfully",
  });
});

export const getMyProfile = CatchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  res.status(200).json({
    success: true,
    user,
  });
});

export const changePassword = CatchAsyncError(async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword) {
    return next(new ErrorHandler("Please Enter All Feilds", 400));
  }
  const user = await User.findById(req.user._id).select("+password");
  const isMatch = await user.comparePassword(oldPassword);

  if (!isMatch) {
    return next(new ErrorHandler("Incorrect Old Password", 400));
  }
  user.password = newPassword;
  await user.save();
  res.status(200).json({
    success: true,
    message: "Password Changed Successfully",
  });
});

export const updateProfile = CatchAsyncError(async (req, res, next) => {
  const { name, email } = req.body;
  const user = await User.findById(req.user._id).select("+password");
  if (name) {
    user.name = name;
  }
  if (email) {
    user.email = email;
  }
  await user.save();
  res.status(200).json({
    success: true,
    message: "Profile Updated Successfully",
  });
});

export const updateProfilePicture = CatchAsyncError(async (req, res, next) => {
  // cloudinary  : TODO
  res.status(200).json({
    success: true,
    message: "Profile Picture Updated Successfully",
  });
});

export const forgetPassword = CatchAsyncError(async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return next(new ErrorHandler("User Not Found", 400));
  }
  const resetToken = await user.getResetToken();

  await user.save();
  // http://localhost:3000/resetpassword/resettoken
  const url = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;
  const message = `Click on the link on to reset your password. ${url}. If you have not requrest then please ignore.`;
  // send Token Via email
  await sendEmail(user.email, "EDUHUB Reset Password", message);

  res.status(200).json({
    success: true,
    message: `Reset Token Has been sent to ${user.email}`,
  });
});

export const resetPassword = CatchAsyncError(async (req, res, next) => {
  const { token } = req.params;

  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: {
      $gt: Date.now(),
    },
  });

  if (!user) {
    return next(new ErrorHandler("Token is invalid or has been expired", 400));
  }
  user.password = req.body.password;
  user.resetPasswordExpire = undefined;
  user.resetPasswordToken = undefined;

  await user.save();
  res.status(200).json({
    success: true,
    message: "Password Changed Successfully",
  });
});

export const addToPlaylist = CatchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  const course = await Course.findById(req.body.id);
  if (!course) {
    return next(new ErrorHandler("Invalid Course ID", 404));
  }

  const itemExits = user.playlist.find((item) => {
    if (item.course.toString() === course._id.toString()) {
      return true;
    }
  });
  if (itemExits) {
    return next(new ErrorHandler("Course Already Exits", 409));
  }
  user.playlist.push({
    course: course._id,
    poster: course.poster.url,
  });

  await user.save();

  res.status(200).json({
    success: true,
    message: "Added To Playlist",
  });
});
export const removeFromPlaylist = CatchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  const course = await Course.findById(req.query.id);
  if (!course) {
    return next(new ErrorHandler("Invalid Course ID", 404));
  }
  const newPlaylist = user.playlist.filter((item) => {
    if (item.course.toString() !== course._id.toString()) {
      return item;
    }
  });

  user.playlist = newPlaylist;
  await user.save();

  res.status(200).json({
    success: true,
    message: "Removed From Playlist",
  });
});
