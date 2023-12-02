import express from "express";
import {
  addToPlaylist,
  changePassword,
  forgetPassword,
  getMyProfile,
  login,
  logout,
  register,
  removeFromPlaylist,
  resetPassword,
  updateProfile,
  updateProfilePicture,
} from "../Controller/userController.js";
import { isAuthenticated } from "../Middleware/isAuthenticated.js";

const userRouter = express.Router();
// to register a new user
userRouter.route("/register").post(register);

// login
userRouter.route("/login").post(login);

// logout
userRouter.route("/logout").get(logout);

// get my profile
userRouter.route("/me").get(isAuthenticated, getMyProfile);

// change password
userRouter.route("/changepassword").put(isAuthenticated, changePassword);

//update profile
userRouter.route("/updateprofile").put(isAuthenticated, updateProfile);
// update profile picture
userRouter
  .route("/updateprofilepicture")
  .put(isAuthenticated, updateProfilePicture);

// forget password
userRouter.route("/forgetpassword").post(forgetPassword);

// reset password
userRouter.route("/resetpassword/:token").put(resetPassword);

//add to playlist
userRouter.route("/addtoplaylist").post(isAuthenticated, addToPlaylist);

// remove from playlist
userRouter
  .route("/removefromplaylist")
  .delete(isAuthenticated, removeFromPlaylist);

export default userRouter;
