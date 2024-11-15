import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LOGO from "../assets/jharrylogo.webp";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
    const { pathname } = useLocation();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="border-0 relative">
            <div className="flex justify-between  gap-1">
                <div className="md:w-[20%] flex justify-center py-4">
                    <Link to={"/"}>
                        <img src={LOGO} className="h-20" alt="" />
                    </Link>
                </div>
                <div className="md:w-[80%] hidden lg:flex justify-between">
                    <div className="flex px-4 justify-around items-center h-100 w-[35%] h-[100%]">
                        <Link to={"/"} className={`${pathname === "/" ? "text-customPrimaryColor" : "text-customSecondaryBlack"} text-lg font-gotham`}>Home</Link>
                        <Link to={"/about"} className={`${pathname === "/about" ? "text-customPrimaryColor" : "text-customSecondaryBlack"} text-lg font-gotham`}>About Us</Link>
                        <Link to={"/contact"} className={`${pathname === "/contact" ? "text-customPrimaryColor" : "text-customSecondaryBlack"} text-lg font-gotham`} >Contacts</Link>
                    </div>
                    <div className="w-[25%] flex justify-center items-center flex gap-2 justify-center">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.001 11.8251C19.9173 9.80843 19.1717 8.1001 17.7645 6.7001C16.3572 5.3001 14.6399 4.55843 12.6128 4.4751V2.9751C13.819 3.00843 14.9541 3.2626 16.0179 3.7376C17.0817 4.2126 18.0158 4.8501 18.8199 5.6501C19.6241 6.4501 20.2649 7.37926 20.7424 8.4376C21.2199 9.49593 21.4753 10.6251 21.5089 11.8251H20.001ZM15.754 11.8251C15.6703 10.9918 15.3352 10.2876 14.7488 9.7126C14.1625 9.1376 13.4504 8.80843 12.6128 8.7251V7.2251C13.8693 7.30843 14.9373 7.78343 15.8169 8.6501C16.6964 9.51676 17.1781 10.5751 17.2618 11.8251H15.754ZM20.4785 21.0001C18.4346 21.0001 16.4032 20.5001 14.3844 19.5001C12.3656 18.5001 10.5521 17.2001 8.94375 15.6001C7.33542 14.0001 6.02865 12.1959 5.02344 10.1876C4.01823 8.17926 3.51562 6.15843 3.51562 4.1251C3.51562 3.80843 3.62452 3.54176 3.84232 3.3251C4.06011 3.10843 4.32817 3.0001 4.64648 3.0001H8.16471C8.39926 3.0001 8.60449 3.07926 8.7804 3.2376C8.95632 3.39593 9.0694 3.60843 9.11966 3.8751L9.79818 7.0251C9.83168 7.25843 9.8275 7.47093 9.78561 7.6626C9.74373 7.85426 9.65577 8.01676 9.52175 8.1501L7.00872 10.6751C7.94692 12.2251 8.9982 13.5751 10.1626 14.7251C11.3269 15.8751 12.6463 16.8501 14.1206 17.6501L16.5079 15.2001C16.6755 15.0168 16.8681 14.8876 17.0859 14.8126C17.3037 14.7376 17.5215 14.7251 17.7393 14.7751L20.7298 15.4251C20.9811 15.4751 21.1905 15.6001 21.3581 15.8001C21.5256 16.0001 21.6094 16.2334 21.6094 16.5001V19.8751C21.6094 20.1918 21.5005 20.4584 21.2827 20.6751C21.0649 20.8918 20.7968 21.0001 20.4785 21.0001ZM6.25482 9.3001L8.29036 7.2501L7.71237 4.5001H5.02344C5.02344 5.1501 5.12396 5.8626 5.325 6.6376C5.52604 7.4126 5.83598 8.3001 6.25482 9.3001ZM20.1016 19.5001V16.8251L17.5132 16.3001L15.5279 18.3751C16.2148 18.6918 16.9603 18.9501 17.7645 19.1501C18.5686 19.3501 19.3477 19.4668 20.1016 19.5001Z" fill="#ef4037"></path>
                        </svg>

                        <p className="text-customSecondaryColor font-semibold text-2xl font-gotham" >703-288-3181</p>
                    </div>
                </div>
                <div className="w-[20%] flex lg:hidden lg:flex justify-center items-center">
                    <GiHamburgerMenu className="text-customPrimaryColor" size={30} onClick={() => setOpen(!open)} style={{ cursor: "pointer" }} />
                </div>
            </div>
            <div className="bg-customSecondaryColor py-4 px-16 hidden lg:block">
                <div className="flex justify-between">
                    <div className="relative group">
                        <div className="flex gap-1 text-white items-center group-hover:text-customPrimaryColor">
                            <Link to={"/ftl"} className="text-md font-normal cursor-pointer hover:text-[#000000]">
                                <p className="text-lg font-gotham" >Full Truckload Shipping</p>
                            </Link>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="flex gap-1 text-white items-center group-hover:text-customPrimaryColor">
                            <Link to={"/ltl-frieght"} className="text-md font-normal cursor-pointer hover:text-[#000000]">
                                <p className="text-lg font-gotham" >LTL Freight</p>
                            </Link>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="flex gap-1 text-white items-center group-hover:text-customPrimaryColor">
                            <Link to={"/expedited"} className="text-md font-normal cursor-pointer hover:text-[#000000]">
                                <p className="text-lg font-gotham" >Expedited Shipping</p>
                            </Link>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="flex gap-1 text-white items-center group-hover:text-customPrimaryColor">
                            <Link to={"/reefer"} className="text-md font-normal cursor-pointer hover:text-[#000000]">
                                <p className="text-lg font-gotham" >Reefer</p>
                            </Link>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="flex gap-1 text-white items-center group-hover:text-customPrimaryColor">
                            <Link to={"/cross-border-shipping"} className="text-md font-normal cursor-pointer hover:text-[#000000]">
                                <p className="text-lg font-gotham" >Cross Border Shipping</p>
                            </Link>
                        </div>
                    </div>
                </div >
            </div >
            {open && <div className="z-50 p-6 absolute bg-customPrimaryColor top-[100%] left-0 right-0 shadow-2xl transition-all duration-500">
                <div className="flex flex-col gap-2">
                    <Link to={"/"}
                        onClick={() => {
                            setOpen(false)
                        }}
                        className="text-md font-normal text-white cursor-pointer hover:text-[#000000]">
                        <p className="text-lg font-gotham" >Home</p>
                    </Link>
                    <Link to={"/about"}
                        onClick={() => {
                            setOpen(false)
                        }}
                        className="text-md font-normal text-white  cursor-pointer hover:text-[#000000]">
                        <p className="text-lg font-gotham" >About</p>
                    </Link>
                    <Link to={"/contact"}
                        onClick={() => {
                            setOpen(false)
                        }}
                        className="text-md font-normal text-white cursor-pointer hover:text-[#000000]">
                        <p className="text-lg font-gotham" >Contacts</p>
                    </Link>
                    <Link to={"/ftl"}
                        onClick={() => {
                            setOpen(false)
                        }}
                        className="text-md font-normal text-white cursor-pointer hover:text-[#000000]">
                        <p className="text-lg font-gotham" >Full Truckload Shipping</p>
                    </Link>
                    <Link to={"/ltl-frieght"}
                        onClick={() => {
                            setOpen(false)
                        }}
                        className="text-md font-normal text-white cursor-pointer hover:text-[#000000]">
                        <p className="text-lg font-gotham" >LTL Freight</p>
                    </Link>
                    <Link
                        to={"/expedited"}
                        onClick={() => {
                            setOpen(false)
                        }}
                        className="text-md font-normal text-white cursor-pointer hover:text-[#000000]">
                        <p className="text-lg font-gotham" >Expedited Shipping</p>
                    </Link>
                    <Link to={"/reefer"}
                        onClick={() => {
                            setOpen(false)
                        }}
                        className="text-md font-normal text-white cursor-pointer hover:text-[#000000]">
                        <p className="text-lg font-gotham" >Reefer</p>
                    </Link>
                    <Link to={"/cross-border-shipping"}
                        onClick={() => {
                            setOpen(false)
                        }}
                        className="text-md font-normal text-white cursor-pointer hover:text-[#000000]">
                        <p className="text-lg font-gotham" >Cross Border Shipping</p>
                    </Link>
                </div>
            </div>}
        </div >
    )
}

export default Navbar;