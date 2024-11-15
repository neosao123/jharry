import { IoLocation } from "react-icons/io5";
import { PiTruckFill } from "react-icons/pi";
import { RiTruckFill } from "react-icons/ri";
import { TbUrgent } from "react-icons/tb";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import BlurImage from "../assets/blurvan.png";

const About = () => {


    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3, // Default for large screens
        speed: 500,
        dots: true,
        autoplay: true, // Enables auto-play
        autoplaySpeed: 3000, // Optional: time in milliseconds (3 seconds)
        responsive: [
            {
                breakpoint: 1024, // Tablet and up
                settings: {
                    slidesToShow: 2, // Show 2 slides on tablets
                    centerPadding: "40px"
                }
            },
            {
                breakpoint: 768, // Small tablets
                settings: {
                    slidesToShow: 2, // Show 1 slide on small tablets
                    centerPadding: "20px"
                }
            },
            {
                breakpoint: 480, // Mobile devices
                settings: {
                    slidesToShow: 1, // Show 1 slide on mobile
                    centerPadding: "10px"
                }
            }
        ]
    };


    return (
        <>
            <section className="flex flex-col lg:flex-row bg-[#ececec] lg:mb-20">
                <div className="lg:w-[50%] p-6 md:pt-20 md:px-20 lg:pb-20">
                    <p className="leading-normal text-lg text-customPrimaryColor font-gotham">Home <span className="text-customPrimaryBlack">/ About Us</span></p>
                    <h1 className="text-h1sm md:text-h1md lg:text-h1lg font-bold text-customPrimaryBlack mt-10 font-ralway">ABOUT US</h1>
                    <h4 className="mt-4 text-5xl font-extrabold text-customSecondaryBlack sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway ">Your Trusted Freight Partner for Reliable and Efficient Shipping Solutions</h4>
                    <p className="text-customSecondaryBlack text-md mt-4 leading-normal font-gotham">At J&Harry Express, we are committed to providing top-tier transportation services that help businesses move their goods efficiently, safely, and on time. With a legacy of excellence in the freight industry, we’ve earned a reputation for being a trusted logistics partner across the United States and beyond. We take pride in offering reliable, cost-effective, and customer-focused solutions for all your shipping needs, from full truckloads to cross-border shipments.</p>
                    <p className="text-customSecondaryBlack text-md mt-4 leading-normal font-gotham">Our mission is simple: to deliver exceptional service, reliability, and peace of mind to every customer we serve. Whether you’re a small business or a large corporation, J&Harry Express is here to simplify your freight logistics and help your business thrive.</p>
                </div>
                <div className="lg:w-[50%] relative">
                    <div className="lg:rounded-s-2xl overflow-hidden lg:mt-32 lg:absolute lg:bottom-[-50px]">
                        <img src="https://deltaexpressinc.com/wp-content/uploads/2022/12/about.png" alt="Truck-image" />
                    </div>
                </div>
            </section>
            <section className="flex flex-col md:flex-row md:px-20 gap-6 py-4 px-4 md:py-20 ">
                <div className="md:w-[50%] md:pr-8">
                    <h1 className="text-customSecondaryBlack text-h1sm md:text-h1md lg:text-h1lg font-extrabold leading-normal font-ralway">OUR STORY</h1>
                    <h4 className="mt-6 text-5xl font-extrabold text-customSecondaryBlack sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway ">A Legacy of Trust, Reliability, and Growth</h4>
                    <p className="text-md leading-normal text-customSecondaryBlack mt-4 font-gotham"><span className="text-[#000000] font-ralway font-[900]">J&Harry Express</span> was established with a single mission: to provide high-quality, dependable freight services that businesses could rely on. From humble beginnings with just a few trucks, we’ve grown into one of the most respected names in the transportation industry, with a fleet of modern vehicles and a team of professionals who share our dedication to excellence.</p>
                    <p className="text-md leading-normal text-customSecondaryBlack mt-4 font-gotham">Throughout our journey, we’ve embraced innovation, adopted the latest technology, and continuously expanded our service offerings to meet the evolving needs of our clients. Today, J&Harry Express serves businesses of all sizes, providing everything from local deliveries to nationwide shipping and cross-border freight solutions.</p>
                </div>
                <div className="md:w-[50%] md:pr-10 leading-normal">
                    <h1 className="text-customSecondaryBlack text-h1sm md:text-h1md lg:text-h1lg font-extrabold leading-normal font-ralway">OUR MISSION</h1>
                    <h4 className="mt-6 text-5xl font-extrabold mb-2 text-customSecondaryBlack sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway ">Delivering Excellence in Every Mile We Drive</h4>
                    <p className="text-md leading-normal text-customSecondaryBlack font-gotham">At J&Harry Express, our mission is to provide the highest quality transportation services, backed by unparalleled customer care. We are focused on offering:</p>
                    <h4 className="mt-4 text-5xl font-extrabold mb-2 text-customSecondaryBlack sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway ">Dependable Service</h4>
                    <p className="text-md leading-normal text-customSecondaryBlack font-gotham">We understand that our customers rely on us to deliver their goods on time, every time. Our goal is to ensure that your shipments are delivered safely and efficiently, no matter the distance or the challenges we face.</p>
                    <h4 className="mt-4 text-5xl font-extrabold mb-2 text-customSecondaryBlack sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway ">Safety First</h4>
                    <p className="text-md leading-normal text-customSecondaryBlack font-gotham">Safety is our top priority. We take every precaution to ensure that your freight is secure throughout its journey. Our drivers are trained to the highest standards, and our trucks are regularly maintained to meet the strictest safety regulations.</p>
                    <h4 className="mt-4 text-5xl font-extrabold mb-2 text-customSecondaryBlack sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway ">Customer-Centric Approach</h4>
                    <p className="text-md leading-normal text-customSecondaryBlack font-gotham">Our clients are at the heart of everything we do. We listen to your unique needs and customize our solutions to suit your business. We pride ourselves on offering personalized service and responsive customer support, ensuring that we’re always here when you need us.</p>
                    <h4 className="mt-4 text-5xl font-extrabold mb-2 text-customSecondaryBlack sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway ">Cost-Effective Solutions</h4>
                    <p className="text-md leading-normal text-customSecondaryBlack font-gotham">We believe in providing value. That’s why we offer competitive rates for all our services, helping you save money on your shipping costs without sacrificing quality or reliability.</p>
                </div>
            </section>
            <section className="bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/bk-services.png')] bg-no-repeat bg-cover bg-center pb-28 overflow-x-hidden">
                <div className="p-6 md:p-20">
                    <h1 className="text-white text-h1sm md:text-h1md lg:text-h1lg font-extrabold leading-normal font-raleway">
                        OUR VALUES
                    </h1>
                    <h4 className="mt-2 text-5xl font-extrabold text-white sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway ">Integrity, Professionalism, and Excellence in Everything We Do</h4>
                    <p className="md:max-w-[70%] mt-4 text-white font-gotham" >We believe that our core values set us apart and drive our success. These values shape our company culture and guide every decision we make.</p>
                </div>
                <div className="">
                    <Slider {...settings}>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-6 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[350px] sm:min-h-[200px] md:min-h-[450px] xl:min-h-[320px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">Integrity</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    At J&Harry Express, we are committed to honesty and transparency. We keep our promises and are dedicated to providing accurate, reliable services. We believe in open communication with our clients, ensuring you always know the status of your shipment.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-6 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[350px] sm:min-h-[200px] md:min-h-[450px] xl:min-h-[320px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">Professionalism</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    From our drivers to our customer support team, professionalism is at the heart of everything we do. Our team is highly trained, knowledgeable, and dedicated to delivering a smooth and hassle-free shipping experience.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-6 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[350px] sm:min-h-[200px] md:min-h-[450px] xl:min-h-[320px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">Excellence</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    We strive for excellence in every aspect of our business—from the quality of our fleet to the efficiency of our delivery routes. We continuously seek ways to improve and innovate, ensuring that we provide the best possible service to our customers.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-6 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[350px] sm:min-h-[200px] md:min-h-[450px] xl:min-h-[320px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">Customer Satisfaction</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Our customers’ satisfaction is our top priority. We take pride in our ability to provide solutions that meet your needs and exceed your expectations. Whether it’s offering flexible delivery options or resolving issues promptly, we go above and beyond to ensure you are happy with our services.
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
            <section className="p-6 md:p-20 bg-[#f6f6f6]">
                <div className="pb-6 md:pb-10">
                    <h1 className="text-customSecondaryBlack text-h1sm md:text-h1md lg:text-h1lg font-extrabold leading-normal font-raleway">
                        OUR TEAM
                    </h1>
                    <h4 className="mt-2 text-5xl font-extrabold text-customSecondaryBlack sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway ">The Heart of J&Harry Express Trucking</h4>
                    <p className="md:max-w-[70%] mt-4 text-customSecondaryBlack font-gotham" >At J&Harry Express , we’re proud of the experienced and dedicated team behind our success. Our drivers, logistics experts, and customer service team members are passionate about delivering superior service and ensuring that every load is handled with care.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="bg-white p-6 rounded-md hover:shadow-xl transition-all shadow-2xl flex flex-col min-h-[300px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><IoLocation size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">Our Drivers</h4>
                        </div>
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            Our professional drivers are the backbone of our operations. With years of experience and extensive training, they ensure the safe and efficient transportation of your goods. They are experts in navigating diverse road conditions, handling different types of cargo, and adhering to safety protocols.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-md hover:shadow-xl transition-all shadow-2xl flex flex-col min-h-[300px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><RiTruckFill size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">Customer Service</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            Our customer service team is available 24/7 to support you with everything from shipment tracking to resolving any concerns or issues that may arise. We believe in building strong relationships with our clients, and our team is dedicated to providing the best possible service every time you call.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-md transition-all shadow-2xl flex flex-col min-h-[300px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><PiTruckFill size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">Logistics and Operations</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            Our logistics team works behind the scenes to plan, optimize, and track every shipment. They ensure that your goods are transported in the most efficient way possible, helping to reduce costs and improve delivery times. Our operations team is always focused on streamlining processes and improving the overall efficiency of our services.
                        </p>
                    </div>
                </div>
            </section>
            <section className="p-6 md:p-20">
                <div className="pb-6 md:pb-10">
                    <h1 className="text-customSecondaryBlack text-h1sm md:text-h1md lg:text-h1lg font-extrabold leading-normal font-raleway">
                        OUR FLEET
                    </h1>
                    <h4 className="mt-2 text-5xl font-extrabold text-customSecondaryBlack sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway ">Equipped for Any Job, Big or Small</h4>
                    <p className="md:max-w-[70%] mt-4 text-customSecondaryBlack font-gotham" >At J&Harry Express, we pride ourselves on having a fleet that’s both modern and well-maintained. Our trucks are equipped with the latest technology to ensure safe and efficient deliveries.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    <div className="rounded-md transition-all flex flex-col min-h-[350px] group">
                        <div className="rounded-2xl overflow-hidden h-[235px]">
                            <img className="group-hover:scale-125 transition-all duration-200" src="https://overlandfreight.com/wp-content/uploads/2019/09/OF-Services_FullTruckload_White-Semi_@1x.jpg" alt="service-icon" />
                        </div>
                        <h4 className="text-4xl font-semibold text-customSecondaryBlack group-hover:text-customSecondaryColor font-raleway my-2">Full Truckload (FTL)</h4>
                        <p className="leading-normal font-gotham">
                            J&Harry Express Trucking offers a comprehensive suite of transportation services designed to meet the diverse needs of businesses across industries. Whether you're a small business shipping a few items or a large corporation with complex logistics needs, we have the capacity and expertise to get the job done.
                        </p>
                        <Link className="my-2"><p className="text-3xl font-gotham text-customSecondaryBlack group-hover:text-customSecondaryColor font-semibold cursor-pointer">Read More.</p></Link>
                    </div>
                    <div className="rounded-md transition-all flex flex-col min-h-[350px] group">
                        <div className="rounded-2xl overflow-hidden h-[235px]">
                            <img className="group-hover:scale-125 transition-all duration-200" src="https://overlandfreight.com/wp-content/uploads/2019/09/OF-Services_FullTruckload_White-Semi_@1x.jpg" alt="service-icon" />
                        </div>
                        <h4 className="text-4xl font-semibold text-customSecondaryBlack group-hover:text-customSecondaryColor font-raleway my-2">Less Than Truckload (LTL)</h4>
                        <p className="leading-normal font-gotham">
                            J&Harry Express Trucking offers a comprehensive suite of transportation services designed to meet the diverse needs of businesses across industries. Whether you're a small business shipping a few items or a large corporation with complex logistics needs, we have the capacity and expertise to get the job done.
                        </p>
                        <Link className="my-2"><p className="text-3xl font-gotham text-customSecondaryBlack group-hover:text-customSecondaryColor font-semibold cursor-pointer">Read More.</p></Link>
                    </div>
                    <div className="rounded-md transition-all flex flex-col min-h-[350px] group">
                        <div className="rounded-2xl overflow-hidden h-[235px]">
                            <img className="group-hover:scale-125 transition-all duration-200" src="https://overlandfreight.com/wp-content/uploads/2019/09/OF-Services_FullTruckload_White-Semi_@1x.jpg" alt="service-icon" />
                        </div>
                        <h4 className="text-4xl font-semibold text-customSecondaryBlack group-hover:text-customSecondaryColor font-raleway my-2">Refrigerated Trailers</h4>
                        <p className="leading-normal font-gotham">
                            J&Harry Express Trucking offers a comprehensive suite of transportation services designed to meet the diverse needs of businesses across industries. Whether you're a small business shipping a few items or a large corporation with complex logistics needs, we have the capacity and expertise to get the job done.
                        </p>
                        <Link className="my-2"><p className="text-3xl font-gotham text-customSecondaryBlack group-hover:text-customSecondaryColor font-semibold cursor-pointer">Read More.</p></Link>
                    </div>
                </div>
            </section>
            <section className="flex p-6 md:p-20 bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/bk-home.png')] bg-cover bg-no-repeat bg-center">
                <div className="w-[0%] md:w-[40%]"></div>
                <div className="md:w-[60%]">
                    <h1 className="text-h1sm md:text-h1md lg:text-h1lg font-extrabold text-customPrimaryBlack font-ralway">OUR SERVICE AREAS</h1>
                    <h4 className="mt-4 text-5xl font-extrabold text-customSecondaryBlack sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway ">Serving Customers Across the Nation and Beyond</h4>
                    <p className="mt-6 text-customSecondaryBlack leading-normal text-md md:max-w-[95%] font-gotham">While our headquarters are based in [Location], we offer comprehensive freight services across the United States and internationally. We provide local, regional, and national deliveries, and we specialize in cross-border shipping between the USA, Canada, and Mexico.</p>
                </div>
            </section>
            <section style={{ backgroundImage: `url(${BlurImage})` }} className="flex p-6 md:p-20  bg-cover bg-no-repeat bg-center">
                <div className="md:w-[60%]">
                    <h1 className="text-h1sm md:text-h1md lg:text-h1lg font-extrabold text-customPrimaryBlack font-ralway">OUR COMMITMENT TO SUSTAINABILITY</h1>
                    <h4 className="mt-4 text-5xl font-extrabold text-customSecondaryBlack sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway ">Building a Greener Future, One Mile at a Time</h4>
                    <p className="mt-6 text-customSecondaryBlack leading-normal text-md md:max-w-[95%] font-gotham">At J&Harry Express, we are committed to reducing our environmental impact. We continually seek ways to improve the fuel efficiency of our fleet, reduce emissions, and implement sustainable practices across our operations. From optimizing delivery routes to investing in newer, cleaner technology, we are doing our part to protect the planet.</p>
                </div>
                <div className="w-[0%] md:w-[40%]"></div>
            </section>
        </>
    )
}

export default About;