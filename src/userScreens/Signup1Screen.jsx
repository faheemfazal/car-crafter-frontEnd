import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "components/Navbar";
import { axiosuser } from "../axiosLink/axios";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../redux-toolkit/slice/userReducer";
import { FormValidate } from "Helpers/formValidation";

function Signup1Screen() {
  const navigate = useNavigate([]);
  const dispatch = useDispatch();
  const registerForm = useRef();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const userstate = useSelector((state) => state.userSlice);

  const { state } = useLocation();
  const number = state.number;

  const handleInputChange = () => {
    setEmail(registerForm.current.email.value);
    setName(registerForm.current.name.value);
    setPassword(registerForm.current.password.value);
  };

  const validateForm = () => {
    const data = {
      email,
      name,
      password,
    };
    const newErrors = FormValidate(data);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const signup = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    const response = await axiosuser({
      url: "/signup",
      method: "post",
      data: {
        number,
        email,
        name,
        password,
      },
    });
    const result = response.data;
    if (result.auth) {
      localStorage.setItem("token", JSON.stringify(result));
      dispatch(
        setLogin({
          ...userstate,
          user: "user",
          id: result.id,
          name: result.name,
          token: result.token,
          email: result.email,
          number: result.number,
        })
      );

      navigate("/place");
    } else {
    }
  };

  return (
    <div className="bg-white bg-cover bg-center  relative  ">
      <Navbar />
      <motion.div
        className="w-full  bg-cover bg-center flex flex-col text-center items-center"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
      >
        <div className=" h-[664px]  md:w-600  text-center flex flex-col justify-between ">
          <div>
            <AiOutlineArrowLeft
              className="ml-5 text-2xl m-2 "
              onClick={() => {
                navigate("/number");
              }}
            />
            <h1 className="text-left ml-5 text-2xl">
              Please Fill Some Details
            </h1>
            <p className="text-left ml-5">
              One last step to create a new account
            </p>
          </div>
          <form
            className="h-614 mt-5  flex flex-col justify-between"
            ref={registerForm}
          >
            <div className="">
              <input
                type="text"
                className=" bg-flag  text-2xl text-gray-700 border rounded-2xl h-16 w-28  outline-none focus:outline-dark-purple pl-4"
                placeholder="+91"
                value={"+" + 91}
              ></input>

              <input
                type="number"
                name="Number"
                className="text-2xl border text-gray-400 rounded-2xl h-16 w-350 ml-5 outline-none focus:outline-dark-purple pl-4"
                placeholder={number}
              />
              <input
                type="email"
                name="email"
                className="w-383 pl-4  mt-4  text-2xl text-gray-700 border h-16 rounded-2xl  outline-none focus:outline-dark-purple"
                placeholder="Email"
                onChange={handleInputChange}
              ></input>
              {errors.emailError && (
                <p className="text-red-500 mt-1 text-xs italic">
                  {" "}
                  {errors.emailError}
                </p>
              )}

              <input
                type="text"
                name="name"
                className="w-383 pl-4  mt-4   text-2xl text-gray-700 border h-16 rounded-2xl   outline-none focus:outline-dark-purple"
                placeholder="Name (As Per Driving License)"
                onChange={handleInputChange}
              ></input>
              {errors.nameError && (
                <p className="text-red-500 mt-1 text-xs italic">
                  {" "}
                  {errors.nameError}
                </p>
              )}

              <input
                type="text"
                name="password"
                className="w-383 pl-4 mt-4   text-2xl text-gray-700 border h-16 rounded-2xl   outline-none focus:outline-dark-purple"
                placeholder="password"
                onChange={handleInputChange}
              ></input>
              {errors.nameError && (
                <p className="text-red-500 mt-1 text-xs italic">
                  {" "}
                  {errors.nameError}
                </p>
              )}
            </div>
            <div className="">
              <button
                className="bg-green-600 w-400  text-white rounded-md h-16  mb-10 "
                placeholder="Enter number"
                type="submit"
                onClick={signup}
              >
                CONTINUE
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default Signup1Screen;
