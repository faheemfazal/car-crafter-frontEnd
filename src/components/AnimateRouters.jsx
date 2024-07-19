import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Homepage from "../userScreens/HomeScreen";
import Login from "userScreens/LoginScreens";
import Landing from "userScreens/LandingScreen";
import { Number } from "userScreens/NumberScreen";
import { AnimatePresence } from "framer-motion";
import Otp from "userScreens/OtpScreen";
import Signup from "userScreens/Signup1Screen";
import HostHomeScreeen from "userScreens/HostHomeScreeen";
import ProofDetail from "./HostForm.jsx/ProofDetail";
import ProtectUserRouter from "Utilites/ProtectUserRouter";

// import WaitforVerify from 'userScreens/HostPaymentsetu';
import RendUserHomeScreen from "userScreens/RendUserHomeScreen";
import FilterModal from "./Filter";
import FindPlace from "./FindPlace";
import FindDate from "./FindDate";
import CarDetailsScreen from "userScreens/CarDetailsScreen";
import CheckoutScreen from "userScreens/CheckoutScreen";
import OrderVerify from "userScreens/OrderVerifyScreen";
import UploadproofScreen from "userScreens/UploadproofScreen";
import OrdersListScreen from "userScreens/OrdersListScreen";
import ExpandCheckout from "userScreens/ExpandCheckout";
import HostCarListScreen from "userScreens/HostCarListScreen";
import HostPaymentsetu from "userScreens/HostPaymentsetu";
import HostVerifyScreen from "userScreens/HostVerifyScreen";
import ChatScreen from "userScreens/ChatScreen";
import HomeScreen from "adminScreens/HomeScreen";

import UserDetail from "adminScreens/UserDetail";
import HostDetailScreen from "adminScreens/HostDetailScreen";
import AddLocation from "adminScreens/AddLocation";
import OrderVerifyAd from "adminScreens/OrderVerify";
import AdminLogin from "adminScreens/LoginScreen";
import PaymentScreen from "adminScreens/PaymentScreen";
import ViewAndPayScreen from "adminScreens/ViewAndPayScreen";
import ErrorScreen from "userScreens/ErrorScreen";
import ProtectAdminRouter from "Utilites/ProtectAdminRouter";
import Prasad from "userScreens/Prasad";

function AnimateRouters() {
  const location = useLocation(); 
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Landing />}></Route>

        <Route  path="/prasad" element={<Prasad />}></Route>

        <Route path="/place" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/number" element={<Number />}></Route>
        <Route path="/otp" element={<Otp />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/host" element={<HostHomeScreeen />}></Route>
        <Route path="/host/form" element={<ProofDetail />}></Route>
        <Route path="/home" element={<RendUserHomeScreen />}></Route>
        <Route path="/Filter" element={<FilterModal />}></Route>
        <Route path="/bankDetail" element={<HostPaymentsetu />}></Route>
        <Route path="/findPlace" element={<FindPlace />}></Route>
        <Route path="/finddate" element={<FindDate />}></Route>
        <Route
          path="/carDetails/:carData"
          element={<CarDetailsScreen />}
        ></Route>

        <Route element={<ProtectUserRouter />}>
          <Route path="/checkout/:carId" element={<CheckoutScreen />}></Route>
          <Route path="/verifyOrder" element={<OrderVerify />}></Route>
          <Route path="/uploadproof" element={<UploadproofScreen />}></Route>
          <Route
            path="/listorderforuser"
            element={<OrdersListScreen />}
          ></Route>
          <Route
            path="/expandCheckout/:orderId"
            element={<ExpandCheckout />}
          ></Route>
          <Route
            path="/hostUserCarList"
            element={<HostCarListScreen />}
          ></Route>
          <Route path="/hostVerify" element={<HostVerifyScreen />}></Route>
          <Route path="/chat/:reciverId" element={<ChatScreen />}></Route>
        </Route>


        <Route element={<ProtectAdminRouter />}>
        <Route path="/adminhome" element={<HomeScreen />}></Route>
        <Route path="/user" element={<UserDetail />}></Route>
        <Route path="/Host-verify" element={<HostDetailScreen />}></Route>
        <Route path="/addlocation" element={<AddLocation />}></Route>
        <Route path="/orderAdminVerify" element={<OrderVerifyAd />}></Route>
        <Route path="/PaymentPage" element={<PaymentScreen />}></Route>
        <Route
          path="/viewAndpay/:userId"
          element={<ViewAndPayScreen />}
        ></Route>

        </Route>

        <Route path="/admin" element={<AdminLogin />}></Route>

        <Route path="/*" element={<ErrorScreen />}></Route>
        {/* <Route path="/admin/*" element={<ErrorScreen />}></Route> */}
      </Routes>
    </AnimatePresence>
  );
}

export default AnimateRouters;
