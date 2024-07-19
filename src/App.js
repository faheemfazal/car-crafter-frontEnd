import React from "react";
import AnimateRouters from "components/AnimateRouters";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdLegendToggle } from "react-icons/md";
import { GoPlus } from "react-icons/go";

function App() {
  return (
    <div className="app h-full">
      {/* <div className="flex  justify-between border-2 border-neutral-300 h-12 mt-3 px-3 rounded-sm">
        <div className="h-full flex  justify-center items-center ">
          <p className="text-red-500 align-middle  ">Course</p>
        </div>
        <div className="flex text-red-500   justify-center items-center gap-3 ">
          <IoMdArrowDropdown />
          <GoPlus />
        </div>
      </div>
      
      
      
      
      <div className="  justify-between border-2 border-neutral-300 h-full mt-2  rounded-sm ">
        <div className="h-12 w-full bg-red-500 flex justify-between px-3">
        <div className="h-full flex  justify-center items-center  ">
          <p className="text-white align-middle  ">Chapter</p>
        </div>
        <div className="flex text-white   justify-center items-center gap-3 ">
          <IoMdArrowDropdown />
          <GoPlus />
        </div>
        </div>
          <div className=" border- border-neutral-300 h-full mt-8 mx-10   rounded-sm ">
            <div className="h-12 w-full  bg-blue-500 flex justify-between px-4 ">
            <div className="h-full flex  justify-center items-center gap-2 text-white ">
          <MdLegendToggle />

          <p className="text-white align-middle  ">Topic</p>
        </div>
        <div className="flex text-white   justify-center items-center gap-3 ">
          <IoMdArrowDropdown />
          <GoPlus />
          <IoMdArrowDropdown />
          <GoPlus />
        </div>
            </div>
            <div className="h-16 w-full border-neutral-300 border-2 neutral-300 border-y-2 flex justify-between px-4  flex-row mb-1 ">
            <div className="flex w-full justify-between border-2 border-green-200 h-10 mt-3 px-3 rounded-sm">
        <div className="h-full flex  justify-center items-center gap-2 ">
          <MdLegendToggle />
          <p className=" align-middle  ">Course content</p>
          <p className="text-red-500 align-middle  ">(defualt)</p>

        </div>
        <div className="flex    justify-center items-center gap-3 ">
          <IoMdArrowDropdown />
          <GoPlus />
          <IoMdArrowDropdown />
          <GoPlus />
        </div>
      </div>
            </div>
            <div className="h-10 w-full border-blue-300  border-2 flex justify-between px-4 mb-1 rounded-lg">
            <div className="h-full flex  justify-center items-center gap-2 text-blue-600 ">
          <MdLegendToggle />
          <p className=" align-middle text-blue-600  ">Topic 1</p>
          

        </div>
        <div className="flex text-blue-600   justify-center items-center gap-3 ">
          <IoMdArrowDropdown />
          <GoPlus />
          <IoMdArrowDropdown />
          <GoPlus />
        </div>
            </div>

            <div className="h-10 w-full border-blue-300  border-2 flex justify-between px-4 mb-1 rounded-lg">
            <div className="h-full flex  justify-center items-center gap-2 text-blue-600 ">
          <MdLegendToggle />
          <p className=" align-middle text-blue-600  ">Topic 1</p>
          

        </div>
        <div className="flex text-blue-600   justify-center items-center gap-3 ">
          <IoMdArrowDropdown />
          <GoPlus />
          <IoMdArrowDropdown />
          <GoPlus />
        </div>
            </div>

            <div className="h-10 w-full border-blue-300  border-2 flex justify-between px-4 mb-1 rounded-lg">
            <div className="h-full flex  justify-center items-center gap-2 text-blue-600 ">
          <MdLegendToggle />
          <p className=" align-middle text-blue-600  ">Topic 1</p>
          

        </div>
        <div className="flex text-blue-600   justify-center items-center gap-3 ">
          <IoMdArrowDropdown />
          <GoPlus />
          <IoMdArrowDropdown />
          <GoPlus />
        </div>
            </div>

            <div className="h-10 w-full border-blue-300  border-2 flex justify-between px-4 mb-1 rounded-lg">
            <div className="h-full flex  justify-center items-center gap-2 text-blue-600 ">
          <MdLegendToggle />
          <p className=" align-middle text-blue-600  ">Topic 1</p>
          

        </div>
        <div className="flex text-blue-600   justify-center items-center gap-3 ">
          <IoMdArrowDropdown />
          <GoPlus />
          <IoMdArrowDropdown />
          <GoPlus />
        </div>
            </div>

            <div className="h-10 w-full border-blue-300  border-2 flex justify-between px-4 mb-1 rounded-lg">
            <div className="h-full flex  justify-center items-center gap-2 text-blue-600 ">
          <MdLegendToggle />
          <p className=" align-middle text-blue-600  ">Topic 1</p>
          

        </div>
        <div className="flex text-blue-600   justify-center items-center gap-3 ">
          <IoMdArrowDropdown />
          <GoPlus />
          <IoMdArrowDropdown />
          <GoPlus />
        </div>
            </div>
       



            

          </div>
          <div className="h-10 ">

          </div>
        
      </div> */}



      

      <BrowserRouter>
        <AnimateRouters />
      </BrowserRouter>
    </div>
  );
}

export default App;
