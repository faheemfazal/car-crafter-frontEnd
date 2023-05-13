import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "components/Navbar";
import { axiosuser } from "../axiosLink/axios";
import { useDispatch } from "react-redux";
import { setLogin } from "../redux-toolkit/slice/userReducer";
import { useSelector } from "react-redux";

function OtpScreen() {
  const navigate = useNavigate();
  const [newotp, setOtp] = useState("");
  const { state } = useLocation();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const oldDate = useSelector((state) => state.userSlice);

  const number = state.number;

  async function otpVerify(e) {
    e.preventDefault();
    const response = await axiosuser({
      url: "/otp",
      method: "post",
      data: {
        otp: newotp,
        number: state.number,
        open,
      },
    });
    const result = response.data;
    if (result.auth) {
      localStorage.setItem("token", JSON.stringify(result));

      dispatch(
        setLogin({
          ...oldDate,
          user: "user",
          id: result.id,
          name: result.name,
          token: result.token,
          email: result.email,
          number: result.number,
        })
      );
      if (oldDate.place) {
        navigate("/");
      } else {
        navigate("/place");
      }
    } else {
    }
  }
  return (
    <div className="bg-white bg-cover bg-center h-screen relative  ">
      <Navbar />
      <motion.div
        className="w-full  bg-cover bg-center flex flex-col text-center items-center"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <div className="  w-screen md:w-600  text-center flex flex-col justify-between">
          <div className="h">
            <AiOutlineArrowLeft
              className="ml-5 mt-5 text-2xl"
              onClick={() => {
                navigate("/login");
              }}
            />
            <h1 className="text-left ml-5 mt-5 text-2xl ">
              {`${open ? "Enter Mobile Password" : "Enter Otp"} `}
            </h1>
          </div>
          <form
            className="h-614 flex flex-col justify-between"
            onSubmit={otpVerify}
          >
            <div className="pt-5">
              {open ? (
                <input
                  type="text"
                  onChange={(e) => {
                    setOtp(e.target.value);
                  }}
                  className="placeholder:text-2xl border text-2xl rounded-2xl h-16 w-400 ml-5 outline-none focus:outline-dark-purple"
                  placeholder="Enter Password"
                ></input>
              ) : (
                <input
                  type="number"
                  onChange={(e) => {
                    setOtp(e.target.value);
                  }}
                  className="placeholder:text-2xl border text-2xl rounded-2xl h-16 w-400 ml-5 outline-none focus:outline-dark-purple"
                  placeholder="Enter Otp"
                ></input>
              )}

              <p></p>
              {!open && (
                <p
                  className="text-start pl-36 pt-3 font-bold text-dark-purple  text-green-600"
                  onClick={() => setOpen(true)}
                >
                  Use Password
                </p>
              )}
              {/* <input type="number" onChange={(e)=>{setOtp(e.target.value)}} className="placeholder:text-2xl border rounded-2xl h-16 w-400 ml-5 outline-none focus:outline-dark-purple"  placeholder="Enter Password"></input> */}
            </div>
            <div className="  ">
              <button
                className="bg-green-600 w-400 text-2xl text-white rounded-md h-16"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default OtpScreen;
