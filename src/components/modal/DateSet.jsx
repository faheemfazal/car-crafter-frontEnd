import React, { useEffect } from "react";
import Datetime from "react-datetime";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datetime/css/react-datetime.css";
import { useState } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { setLogin } from "redux-toolkit/slice/userReducer";
import { BiBook } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function DateSet({
  open,
  setOpen,
  selectedDate,
  setSelectedDate,
  endDate,
  setEndDate,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const minDate = new Date();
  const maxDate = new Date("2024-12-31T00:00");
  const state = useSelector((state) => state.userSlice);
  const [setdate, setSetdate] = useState("");

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  if (!open) return null;



  const handleStartDateChange = (date) => {
    setSelectedDate(date);

    // setEndDate(moment(date).add('hours', 1).toDate())
    setEndDate(
      moment(date)
        .set({ hours: 0, minutes: 0, seconds: 0, milliseconds: 0 })
        .toDate()
    );
  };

  const handleEndDateChange = (date) => {
    // const fdate = new Date(date);
    const hasTime =
      date.getHours() > 0 || date.getMinutes() > 0 || date.getSeconds() > 0;

    if (hasTime) {
      setEndDate(date);
      dispatch(
        setLogin({
          ...state,
          date: selectedDate,
          endDate: date,
        })
      );
      setOpen(false);
    } else {
      setEndDate(date);
    }
  };

  return (
    <>
      <div className="fixed inset-0 " onClick={() => setOpen(false)} />
      <div className="fixed  lg:left-64 lg:right-64 md:left-20 md:right-20 left-10 right-10   sm:top-72 bottom-5 top-64  bg-white  rounded-2xl border-stone-600 shadow-3xl flex justify-center ">
        <div>
          <div className="p-3  ">
            <div className="flex">
              <h1 className=" text-2xl m-3">Chose Your Date & Time</h1>
            </div>
            <div className=" flex flex-row justify-between ">
              <div className="  flex flex-col  justify-center items-center ">
                <div className="m-auto   w-full sm:flex  ">
                  <div className="w-full">
                    <h1>When you start your trip </h1>
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleStartDateChange}
                      showTimeSelect
                      dateFormat="yyyy-MM-dd HH:mm"
                      minDate={selectedDate}
                      maxDate={maxDate}
                      calendarClassName="bg-white shadow-lg rounded-lg py-4 px-2 absolute top-1 "
                      className="appearance-none m-3   mr-8 text-xl bg-slate-200  h-full inline-block  "
                    />
                  </div>

                  <div className="w-12 sm:w-full"></div>
                  <div className="w-full">
                    <h1 className="">When you end your trip </h1>
                    <DatePicker
                      selected={endDate}
                      onChange={handleEndDateChange}
                      calendarClassName="bg-white shadow-lg rounded-lg py-4 px-2 absolute top-1"
                      showTimeSelect
                      dateFormat="yyyy-MM-dd HH:mm"
                      minDate={endDate}
                      maxDate={maxDate}
                      className="appearance-none m-3 ml-5   mr-8 text-xl bg-slate-200  h-full inline-block  "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default DateSet;
