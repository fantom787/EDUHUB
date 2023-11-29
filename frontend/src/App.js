import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import ContactUs from './components/Contact/ContactUs';
import Request from './assets/videos/Request/Request';
import About from './components/About/About';
import Subscribe from './components/Payments/Subscribe';
import NotFound from './components/Not Found/NotFound';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import PaymentFailed from './components/Payments/PaymentFailed';
import CoursePage from './components/CoursePage/CoursePage';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import CreateCourse from './components/Admin/Create Course/CreateCourse';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses';
import Users from './components/Admin/Users/Users';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Navbar Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/request" element={<Request />} />

        {/* Profile Routes */}

        <Route path="/profile" element={<Profile />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/paymentfailed" element={<PaymentFailed />} />
        <Route path="/course/:id" element={<CoursePage />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/createcourse" element={<CreateCourse />} />
        <Route path="/admin/courses" element={<AdminCourses />} />
        <Route path="/admin/users" element={<Users />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
