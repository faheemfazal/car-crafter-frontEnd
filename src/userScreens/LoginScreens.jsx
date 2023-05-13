import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LoginSocialGoogle } from "reactjs-social-login";
import { GoogleLoginButton } from "react-social-login-buttons";
import { axiosuser } from "../axiosLink/axios";
import Navbar from "components/Navbar";
import image from "../components/assets/fb65fcc43b8bededb813e093ea2d47d3 (1).svg";
import { googleAuthentication } from "Api/userAuth";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "redux-toolkit/slice/userReducer";

function LoginScreens() {
  const dispatch = useDispatch();
  const oldDate = useSelector((state) => state.userSlice);

  const emailverify = async (data) => {
    try {
      const res = await googleAuthentication(data);
      if (res.status === 200) {
        const result = res.data;
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
        if (oldDate.location && oldDate.endDate) {
          navigate("/home");
        } else if (oldDate.location) {
          navigate("/place");
        } else {
          navigate("/");
        }
      } else {
      }
    } catch {}
  };

  const navigate = useNavigate();
  return (
    <div className="bg-white bg-cover bg-center h-screen relative  ">
      <Navbar />
      <motion.div
        className="w-full   mt-4 md:mt-8   flex flex-col text-center  items-center "
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <div className=" w-500 md:w-600  text-center bg-white  flex flex-col justify-between  ">
          <div className="  items-start h-20 ">
            <h1 className=" text-1.5rem pl-8 text-left pt-2 text-black  ">
              Enter details to login/sign-up
            </h1>
          </div>
          <div className="  items-start mt-1 flex pl-16 h-12">
            <div className="bg-flag bg-cover bg-center w-10 h-6"></div>
            <h1 className="text-left text-base pl-3">+91</h1>
            <h1
              className="pl-3 text-base
                "
            >
              |
            </h1>
            <h1
              onClick={() => {
                navigate("/number");
              }}
              className="pl-3"
            >
              Enter Mobile Number
            </h1>
          </div>
          <hr className="border-bl" />

          <div className="h-28 items-center mt-2 ml-8 ">
            <LoginSocialGoogle
              className="  w-400 items-center  text-white rounded-md h-16  mb-10"
              client_id="202525666540-sn03ud3heune27sj4ck4cfse356itt50.apps.googleusercontent.com"
              scope="openid profile email"
              discoveryDocs="claims_supported"
              access_type="offline"
              onResolve={emailverify}
              onReject={(err) => {
                console.log(err);
              }}
            >
              <GoogleLoginButton className="bg-dark-purple w-400   text-white rounded-md h-  mb-10" />
            </LoginSocialGoogle>
          </div>
          <img src={image} alt="" />
        </div>
      </motion.div>
    </div>
  );
}

export default LoginScreens;
