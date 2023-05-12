import Navbar from "components/Navbar";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import DateSet from "components/modal/DateSet";
import PlaceSet from "components/modal/PlaceSet";
import { getSutableLocation } from "Api/findCar";
import "react-datetime/css/react-datetime.css";
import { useNavigate } from "react-router-dom";
import { setLogin } from "redux-toolkit/slice/userReducer";
import { getDate } from "Api/findCar";
import { Link } from "react-router-dom";
import homeimprove from "../components/assets/1a66b1dffc1c18e0b598ee3bf564e35a5e462a53.jpg";
import irfad from "../components/assets/WhatsApp Image 2023-05-04 at 16.33.27.jpeg";
import abin from "../components/assets/irfad.jpeg";
// import irfad from '../components/assets/WhatsApp Image 2023-05-04 at 16.33.27.jpeg'

import Footer from "components/Footer";
import moment from "moment";
import { message } from "antd";

const Homepage = () => {
  const [touchPlace, setTouch] = useState(false);
  const [touchDate, setDateTouch] = useState(false);
  const [sutable, setSutable] = useState([]);
  const reduxstate = useSelector((state) => state.userSlice);
  const { location, email } = useSelector((state) => state.userSlice);
  const [mmessage, setMessage] = useState("");
  const [state, setState] = useState(false);

  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState();
  const [endDate, setEndDate] = useState();
  // const [selectedTime, setSelectedTime] = useState('');
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const guests = [
    {
      img: irfad,
      gestName: "abinand, Bengaluru",
      role: "Flattered with availability of well maintained cars",
    },
    {
      img: irfad,
      gestName: "irfad, Delhi",
      role: `Booked a XUV with unlimited kms, very happy with Zoomcar's service`,
    },
    {
      img: irfad,
      gestName: "badu, australia",
      role: "Booked a car for a family trip which was very comfortable and in great condition",
    },
  ];

  useEffect(() => {
    getDate().then((res) => {
      setSelectedDate(res.date);
    });
  }, []);

  useEffect(() => {
    getSutableLocation(location).then((res) => {
      if (res.status === 201) {
        setSutable(res.data.sutablelocation);
        setState(true);
      } else {
        setMessage(res.data.message);
      }
    });
  }, [state, city, selectedDate, endDate]);
  const findCar = () => {
    if (endDate) {
      navigate("/home");
    } else {
      message.error("please chose your trip date");
    }
  };

  return (
    <div className={`h-screen   `}>
      <motion.div
        className="bg-web bg-cover bg-center  w-full h-screen  "
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        // onclick={onclick}
      >
        <Navbar />
        <div className="flex flex-col items-center h-[750px] bg-web bg-cover bg-center overflow-hidden">
          <div className="w-5/6 md:w-4/6 lg:px-6  lg:w-3/6 sm:28 sm:h-28  h-20 sm:3/6 sm:mt-5 mt-5 px-2  bg-black bg-opacity-70 z-0 flex justify-center ">
            <h1 className="sm:text-3xl text-xl text-center text-white font-semibold filter ">
              The perfect car for your next trip is just around the corner
            </h1>
          </div>

          <div className="w-4/5 lg:w-2/5 sm:mt-4 mt-4  rounded-full  h-16 bg-white flex cursor-pointer">
            <div
              className="w-4/12 h-full flex-row justify-center "
              onMouseOver={() => {
                setTouch(true);
              }}
            >
              <h1 className="pt-2 pl-1 cursor-pointer">
                {location}. {city && city}{" "}
              </h1>
              <PlaceSet
                open={touchPlace}
                setCity={setCity}
                setOpen={setTouch}
                sutable={sutable}
                location={location}
                setOpenDate={setDateTouch}
              />
            </div>
            <div
              className="w-5/12 h-full flex"
              onMouseOver={() => {
                setDateTouch(true);
              }}
            >
              <p className="text-3xl font-light mt-1 cursor-pointer text-green-600">
                |
              </p>
              <DateSet
                open={touchDate}
                setOpen={setDateTouch}
                endDate={endDate}
                setEndDate={setEndDate}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />

              <h1>{}</h1>
              <div className="p-2">
                <h1>{moment(selectedDate).format("yyyy-MM-DD HH:mm")}</h1>
                <h1>{moment(endDate).format("yyyy-MM-DD HH:mm")}</h1>
              </div>

              {/* <input type="datetime-local" 
       name="meeting-time" 
 className=''/> */}
            </div>
            <div
              className="w-4/12 h-full cursor-pointer bg-green-600 rounded-r-full text-center m-auto py-4 font-bold text-white"
              onClick={findCar}
            >
              GET CAR
            </div>
          </div>
        </div>
        <div className="bg-white w-full  ">
          <div className=" bg-white h-screen    border-black  ">
            <div className="w-full h-44 p-4 ">
              <h1 className="text-center sm:text-4xl text-2xl font-bold  ">
                WE LOVE GIVING BEST EXPERIENCES
              </h1>
              <h1 className="text-center p-2 text-xl mt-2 font-semibold">
                We cover you under all the circumstances to ensure the best
                journey
              </h1>
            </div>
            <div className="w-full h-614 bg-cover bg-center bg-phone flex justify-center">
              <div className="w-5/6 md:w-4/6 lg:px-6 lg:w-3/6 h-28 sm:3/6 sm:mt-28 mt-28 px-2  bg-black bg-opacity-50 z-0 flex justify-center ">
                <h1 className="sm:text-3xl text-2xl p-2 text-center text-white font-semibold filter ">
                  The perfect car for your next trip is just around the corner
                </h1>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-center text-3xl p-4 font-bold text-gray-800 mt-10">
          HEAR FROM OUR GUESTS
        </h1>
        <div className="w-full md:w-full  flex justify-center sm:gap-3 gap-2 p-10">
          {guests.map((data, index) => (
            <div className="flex ">
              <div>
                <div className="max-w-sm h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#" className="justify-center flex object-fill mt-2">
                    <img
                      className="rounded-t-lg w-60 items-center object-cover flex justify-center"
                      src={data.img}
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                        {data.gestName}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
                      {data.role}
                    </p>
                    {/* <a
      href="#"
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Read more
      <svg
        aria-hidden="true"
        className="w-4 h-4 ml-2 -mr-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </a> */}
                  </div>
                </div>
              </div>
              <div></div>
              <div></div>
            </div>
          ))}
        </div>

        <Footer />
      </motion.div>
    </div>
  );
};

export default Homepage;

//  {children,onclick}
