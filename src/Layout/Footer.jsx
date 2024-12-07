import { FaLinkedinIn, FaPhone, FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdHomeFilled } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import LOGO from "../assets/jharrylogo.webp";

const Footer = () => {
    return (
        <div className="p-6 lg:px-20 lg:py-10 bg-[#000000]">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-[30%] py-6">
                    {/* <img className="w-100" src="https://deltaexpressinc.com/wp-content/uploads/2023/01/logo-footes.svg" alt="image" /> */}
                    <div className="p-4 bg-customWhiteColor w-32">
                        <img className="w-32" src={LOGO} alt="image" />
                    </div>
                </div>
                <div className=" md:w-[70%] flex flex-col md:flex-row gap-2">
                    <div className="w-[100%] md:w-[50%]">
                        <p><FaPhone size={25} className="text-customPrimaryColor" /></p>
                        <div className="flex gap-2 flex-col mt-4" >
                            <p className="text-md text-white leading-normal font-gotham">704-288-3119 <span className="ms-3 text-customPrimaryColor">Main line (Truckload dept)</span></p>
                            <p className="text-md text-white leading-normal font-gotham">703-287-3118 <span className="ms-3 text-customPrimaryColor">Expedite dept</span></p>
                            <p className="text-md text-white leading-normal font-gotham">702-286-3117 <span className="ms-3 text-customPrimaryColor">Truckload recruiting</span></p>
                            <p className="text-md text-white leading-normal font-gotham">701-285-3116 <span className="ms-3 text-customPrimaryColor">Obc dept</span></p>
                            <p className="text-md text-white leading-normal font-gotham">700-284-3115 <span className="ms-3 text-customPrimaryColor">Global Forwarding (Main Line)</span></p>
                        </div>
                        <div className="mt-4">
                            <p><MdHomeFilled size={25} className="text-customPrimaryColor" /></p>
                            <div className="flex gap-2 flex-col mt-4" >
                                <p className="text-md text-white leading-normal font-gotham">603 Centerburry Rd,</p>
                                <p className="text-md text-white leading-normal font-gotham">Kings Mountain, NC 28086</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[100%] md:w-[50%] mt-6 md:mt-0">
                        <p><MdEmail size={25} className="text-customPrimaryColor" /></p>
                        <div className="flex gap-2 flex-col mt-4" >
                            <p className="text-md text-white leading-normal font-gotham">truckload@deltaexpressinc.com</p>
                            <p className="text-md text-white leading-normal font-gotham">expeditedeliveries@deltaexpressinc.com</p>
                            <p className="text-md text-white leading-normal font-gotham">hr@deltaexpressinc.com</p>
                            <p className="text-md text-white leading-normal font-gotham">obc@deltaexpressinc.com</p>
                            <p className="text-md text-white leading-normal font-gotham">globalforwarding@deltaexpressinc.com</p>
                        </div>
                        <div className="mt-4">
                            <p className="text-customPrimaryColor font-semibold">Find Us On</p>
                            <div className="flex gap-2 mt-4 gap-5" >
                                <Link className="p-1 rounded bg-white">
                                    <FaFacebookF />
                                </Link>
                                <Link className="p-1 rounded bg-white">
                                    <FaInstagram />
                                </Link>
                                <Link className="p-1 rounded bg-white">
                                    <FaLinkedinIn />
                                </Link>
                                <Link className="p-1 rounded bg-white">
                                    <FaXTwitter />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-customPrimaryColor mt-4 font-gotham text-center">J&HarryExpress Inc. © 2024</p>
            </div>
        </div>
    )
}
export default Footer;