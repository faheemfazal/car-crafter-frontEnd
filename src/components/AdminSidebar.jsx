import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUsersCog } from "react-icons/fa";
import { SiCheckmarx } from "react-icons/si";
// import {AiFillDashboard} from 'react-icons/ai'
// import { useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { setLogoutAdmin } from 'redux-toolkit/slice/adminReducer'
// import { useDispatch } from 'react-redux'
import { HiOutlineLogout } from "react-icons/hi";
import { BiLocationPlus } from "react-icons/bi";
import { GoUnverified } from "react-icons/go";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { BsBuildingFill } from "react-icons/bs";
import { BsBagFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setLoginAdmin } from "redux-toolkit/slice/adminReducer";

function AdminSidebar({ children }) {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 767px)").matches
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function logout() {
    dispatch(
      setLoginAdmin({
        name: null,
        token: null,
        email: null,
      })
    );
    navigate("/admin");
  }

  const menus = [
    { name: "dasboard", link: "/adminhome", icon: GiHamburgerMenu },
    { name: "Users", link: "/user", icon: FaUsersCog },
    { name: "Host Verify", link: "/host-verify", icon: SiCheckmarx },
    { name: "Add Location", link: "/addlocation", icon: BiLocationPlus },
    { name: "Orders", link: "/orderAdminVerify", icon: GoUnverified },
    { name: "Payment", link: "/PaymentPage", icon: GiPayMoney },
    // {name:"Logout",link:'/admin',icon:HiOutlineLogout},
  ];
  return (
    <div className="flex gap-6">
      <div
        className={`bg-slate-100 min-h-[42.887rem]  ${
          !isMobile ? "w-72" : "w-16"
        }  duration-500 text-gray-700 px-4`}
      >
        {/* <div className='py-3 flex justify-end'>
              <GiHamburgerMenu size={26} className="cursor-pointer" onClick={()=>setOpen(!open)}/> 
           </div> */}
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className="group flex items-center gap-3.5 font-medium p-2 bg-white hover:text-white hover:bg-green-600 rounded-md"
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>

              <h2
                className={`whitespace-pre duretion-500 
                  ${
                    isMobile && "opacity-0 translate-x-28 overflow-hidden"
                  } transition-all transform  duration-500 delay-500`}
              >
                {menu?.name}
              </h2>
              <h2
                className={` ${
                  !isMobile && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre
                  text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden z-10  group-hover:px-2 group-hover:py-1
                  group-hover:left-14  group-hover:duration-300  group-hover:w-fit`}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
          <div
            className="group flex items-center gap-3.5 font-medium p-2 bg-white hover:text-white hover:bg-green-600 rounded-md"
            onClick={logout}
          >
            <div>
              <HiOutlineLogout />
            </div>

            <h2
              className={`whitespace-pre duretion-500 
                  ${
                    isMobile && "opacity-0 translate-x-28 overflow-hidden"
                  } transition-all transform  duration-500 delay-500`}
            >
              Logout
            </h2>
            <h2
              className={` ${
                !isMobile && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre
                  text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden z-10  group-hover:px-2 group-hover:py-1
                  group-hover:left-14  group-hover:duration-300  group-hover:w-fit`}
            >
              Logout
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;
