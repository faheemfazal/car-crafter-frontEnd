import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GrMapLocation } from "react-icons/gr";
import { getSutableLocation } from "Api/findCar";
import Navbar from "./Navbar";
import { AiOutlineArrowLeft } from "react-icons/ai";

function FindPlace() {
  const { state } = useLocation();
  console.log(state, "ddddddddd");
  const [sutable, setSutable] = useState([]);
  const [message, setMessage] = useState("");
  const { date, location } = state;
  const navigate = useNavigate();

  useEffect(() => {
    getSutableLocation(location).then((res) => {
      if (res.status === 201) {
        setSutable(res.data.sutablelocation);
        // setState(true)
      } else {
        setMessage(res.data.message);
      }
    });
  }, []);

  const changeLocation = (data) => {
    localStorage.setItem("sutableLocation", data.neighbourhood);
    navigate("/home");
  };

  return (
    <div className="">
      <Navbar />
      <div className=" container mx-auto   ">
        <div className="flex w-full justify-center">
          <AiOutlineArrowLeft
            className="ml-5 mt-5 text-2xl"
            onClick={() => {
              navigate("/home");
            }}
          />
          <h1 className=" text-2xl m-3">Chose Your Location</h1>
        </div>
        <div className="w-full flex h-12 border-slate-400 border-2  ">
          <div className="rounded-full h-6 w-6 bg-green-200 m-3 mt-3 ">
            <div className="rounded-full h-3 w-3 bg-green-600  relative top-1.5 left-1.5"></div>
          </div>
          <div>
            <h1 className="mt-3">{}</h1>
          </div>
          <div className=" ">
            <input
              type="text"
              className="w-6/6  mt-2 ml-2 h-8 bg-slate-100 outline-none focus:outline-white"
              placeholder="Select your starting point"
            />
          </div>
        </div>
        <div>
          <h1 className="m-2 font-bold">SUGGESTED LOCATIONS</h1>
          {sutable.map((data, index) => (
            <div
              className="flex p-2 bg-slate-100"
              onClick={() => changeLocation(data)}
            >
              <GrMapLocation className="ml-3 mt-2 text-3xl text-black" />

              <div className="ml-3">
                <h1 className="font-semibold text-lg">
                  {data.city},<span className="ml-3">{data.state}</span>
                </h1>
                <p>{data.neighbourhood}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FindPlace;
