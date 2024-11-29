import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoLocation } from "react-icons/io5";
import { RiTruckFill } from "react-icons/ri";
import { PiTruckFill } from "react-icons/pi";
import { TbUrgent } from "react-icons/tb";
import Truck from "../assets/truck.jpg";
import WhiteTruck from "../assets/whiteTruck.png"
import TruckBack from "../assets/truckBack.webp"
import trucks from "../assets/trucks.jpg"
import trucknature from "../assets/trucknature.avif"

const Dashboard = () => {


    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3, // Default for large screens
        speed: 500,
        dots: true,
        autoplay: false, // Enables auto-play
        autoplaySpeed: 3000, // Optional: time in milliseconds (3 seconds)
        adaptiveHeight: false,
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
            <section className="flex flex-col md:flex-row">
                <div className="md:w-[55%] p-6 md:p-20">
                    <h1 className="text-h1sm md:text-h1md lg:text-h1lg font-extrabold text-customSecondaryBlack leading-normal font-ralway ">WELCOME TO J&HARRY EXPRESS</h1>
                    <h4 className="mt-4 text-5xl font-extrabold text-customSecondaryBlack leading-normal font-ralway break-words">Dependable. Efficient. Trusted Nationwide.</h4>
                    <p className="text-md text-customPrimaryBlack mt-8 font-gotham" >At <span className="text-[#000000] font-ralway font-[900]">J&Harry Express</span>, we pride ourselves on delivering freight solutions that are as reliable as they are efficient. With years of experience, a fleet of modern, well-maintained trucks, and a team of dedicated professionals, we’ve built a reputation for getting goods where they need to be—on time, in perfect condition, and at a competitive price.</p>
                    <p className="text-md text-customPrimaryBlack mt-6 mb-20 md:mb-0 font-gotham" >Whether you're shipping a single pallet across town or need to haul large, specialized equipment across the country, J&Harry Express has the expertise, equipment, and commitment to handle any freight challenge. Our mission is simple: to provide safe, reliable, and cost-effective transportation services that help your business thrive.</p>
                </div>
                <div className="md:w-[45%] p-6 md:p-0 flex justify-center items-center">
                    <img className="rounded-2xl" src={TruckBack} alt="truck" />
                </div>
            </section>
            <section className="flex flex-col md:flex-row p-6 md:p-20">
                <div className="py-6 md:w-[40%] rounded-2xl flex justify-center items-center overflow-hidden">
                    <img src={trucks} alt="truck" className="h-[100%] rounded-2xl" />
                </div>
                <div className="md:w-[60%] md:px-20">
                    <h1 className="text-h1sm md:text-h1md lg:text-h1lg font-extrabold text-customPrimaryBlack font-ralway">WHY J&HARRY EXPRESS ?</h1>
                    <h4 className="mt-4 text-5xl font-extrabold text-customSecondaryBlack leading-normal font-ralway ">Your Business Deserves the Best in Freight Solutions</h4>
                    <p className="mt-6 text-customSecondaryBlack leading-normal text-md font-gotham">In today’s fast-paced economy, time is money, and reliability is key. J&Harry Express understands the pressure to meet deadlines, reduce costs, and ensure smooth supply chain operations. That’s why we’ve invested in cutting-edge technology, top-of-the-line equipment, and the best drivers in the industry. When you work with us, you’re working with a team that cares about your cargo just as much as you do.</p>
                    <div className="flex gap-10 items-center justify-start">
                        <Link to={"/contact"}><button className="text-lg text-white bg-customSecondaryColor px-10 py-3 rounded-md mt-10 mb-10 font-gotham">Request a Quote</button></Link>
                        <Link className="">
                            <button type="button" className="text-lg bg-none text-btnColor border-0 border-b-2 border-customPrimaryBlack mt-8 rounded-none leading-normal hover:text-customPrimaryColor hover:border-customPrimaryColor">Learn More</button>
                        </Link>
                    </div>
                </div>
            </section>
            <section style={{ backgroundImage: `url(${Truck})` }} className="bg-no-repeat bg-cover bg-center pb-28 overflow-x-hidden">
                <div className="p-6 md:p-20">
                    <h1 className="text-customWhiteColor text-h1sm md:text-h1md lg:text-h1lg font-extrabold leading-normal font-ralway">OUR KEY BENEFITS</h1>
                </div>
                <div className="">
                    <Slider {...settings}>
                        <div className="bg-transparent px-5 slide">
                            <div className="bg-white p-6 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[400px] sm:min-h-[250px] md:min-h-[500px] lg:min-h-[300px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">On-Time Delivery</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Time-sensitive shipments? No problem. Our advanced routing system and experienced drivers ensure that your cargo arrives exactly when you need it—every time. Whether you're shipping locally, regionally, or nationwide, we guarantee punctuality and dependability.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5 slide">
                            <div className="bg-white p-6 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[400px] sm:min-h-[250px] md:min-h-[500px] lg:min-h-[300px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">Safety & Security</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Your freight is in safe hands. We invest heavily in maintaining a modern fleet equipped with the latest safety features and monitoring systems. Our drivers are highly trained and follow rigorous safety protocols, ensuring your goods arrive in the same condition they were loaded.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5 slide">
                            <div className="bg-white p-6 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[400px] sm:min-h-[250px] md:min-h-[500px] lg:min-h-[300px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">Cost-Effective Solutions</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    At J&Harry Express Trucking, we offer competitive rates without sacrificing quality or service. Our goal is to provide value-driven freight solutions that make sense for your budget. With flexible pricing structures and a variety of shipping options, we ensure that you only pay for what you need.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5 slide">
                            <div className="bg-white p-6 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[400px] sm:min-h-[250px] md:min-h-[500px] lg:min-h-[300px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">Customized Freight Services</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    We know that no two shipments are the same. That’s why we offer a wide range of services tailored to your specific needs. Whether it’s full truckload (FTL), less than truckload (LTL), expedited delivery, or specialized equipment hauling, we’ll customize a solution that works for you.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-6 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[400px] sm:min-h-[250px] md:min-h-[500px] lg:min-h-[300px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">24/7 Customer Support</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    From tracking shipments to answering questions or managing last-minute changes, our customer service team is available around the clock. Our focus is on providing clear communication and fast, reliable support every step of the way.
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
            <section className="p-6 md:p-20 bg-[#f6f6f6]">
                <div className="pb-8 md:pb-20">
                    <h1 className="text-customSecondaryBlack text-h1sm md:text-h1md lg:text-h1lg font-extrabold leading-normal font-raleway">
                        OUR SERVICES
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="bg-white p-8 rounded-md hover:shadow-xl transition-all shadow-2xl flex flex-col min-h-[350px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><IoLocation size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">Reliable Freight Solutions for Every Need</h4>
                        </div>
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            J&Harry Express Trucking offers a comprehensive suite of transportation services designed to meet the diverse needs of businesses across industries. Whether you're a small business shipping a few items or a large corporation with complex logistics needs, we have the capacity and expertise to get the job done.
                        </p>
                        <Link><p className="text-3xl font-gotham text-customSecondaryColor font-semibold cursor-pointer">Read More.</p></Link>
                    </div>
                    <div className="bg-white p-8 rounded-md hover:shadow-xl transition-all shadow-2xl flex flex-col min-h-[350px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><RiTruckFill size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">Full Truckload (FTL)</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            When you have a larger shipment that needs a direct, uninterrupted route, our Full Truckload (FTL) service is the perfect solution. Your goods are the sole focus of the shipment, ensuring direct routes and quicker delivery times.
                        </p>
                        <Link><p className="text-3xl font-gotham text-customSecondaryColor font-semibold cursor-pointer">Read More.</p></Link>
                    </div>
                    <div className="bg-white p-8 rounded-md transition-all shadow-2xl flex flex-col min-h-[350px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><PiTruckFill size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">Less Than Truckload (LTL)</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            If your freight doesn’t require an entire truck, our LTL service provides a cost-effective alternative. Share space with other shipments while ensuring that your goods are securely handled and delivered on time.
                        </p>
                        <Link><p className="text-3xl font-gotham text-customSecondaryColor font-semibold cursor-pointer">Read More.</p></Link>
                    </div>
                    <div className="bg-white p-8 rounded-md bg-[#ffffff] transition-all shadow-2xl flex flex-col min-h-[350px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><TbUrgent size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">Expedited Freight</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            For urgent deliveries that can’t afford to wait, our Expedited Freight services offer fast, reliable transportation. Whether you need to move critical parts, time-sensitive products, or emergency supplies, we’ll ensure your shipment reaches its destination as quickly as possible.
                        </p>
                        <Link><p className="text-3xl font-gotham text-customSecondaryColor font-semibold cursor-pointer">Read More.</p></Link>
                    </div>
                    <div className="bg-white p-8 rounded-md bg-[#ffffff] transition-all shadow-2xl flex flex-col min-h-[350px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><IoLocation size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">Reefer</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            We understand the importance of maintaining temperature-sensitive cargo. Our refrigerated trucking services are ideal for shipping perishable goods like food, and other temperature-sensitive products. We ensure that your shipment remains at the perfect temperature throughout transit.
                        </p>
                        <Link><p className="text-3xl font-gotham text-customSecondaryColor font-semibold cursor-pointer">Read More.</p></Link>
                    </div>
                    <div className="bg-white p-8 rounded-md bg-[#ffffff] transition-all shadow-2xl flex flex-col min-h-[350px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><IoLocation size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway"> Crossborder Shipping to USA</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            We specialize in providing efficient, reliable, and compliant cross-border freight services to the USA. Whether you’re importing or exporting goods across the Canada-US border or from Mexico to the USA, our team is equipped with the knowledge and expertise to ensure that your freight moves smoothly, legally, and on time.
                        </p>
                        <Link><p className=" text-customSecondaryColor font-semibold cursor-pointer font-gotham">Read More.</p></Link>
                    </div>
                </div>
            </section>
            <section className="p-6 md:p-20 bg-customPrimaryColor">
                <div className="pb-8 md:pb-20">
                    <h1 className="text-white text-h1sm md:text-h1md lg:text-h1lg font-extrabold leading-normal font-raleway">
                        FLEET & EQUIPMENT
                    </h1>
                    <h4 className="mt-2 text-5xl font-extrabold text-white sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway ">State-of-the-Art Trucks for Safe, Efficient Transport</h4>
                    <p className="md:max-w-[70%] mt-4 text-white font-gotham" >At J&Harry Express, our fleet is the backbone of our business. We pride ourselves on maintaining a modern, reliable, and diverse fleet of trucks equipped to handle any type of freight. From heavy hauls to temperature-controlled goods, we’ve got the right vehicle for the job.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:grid-cols-3 gap-5">
                    <div className="bg-[#f6f6f6] p-8 rounded-md hover:shadow-xl transition-all shadow-2xl flex flex-col min-h-[260px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><IoLocation size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">Modern, Well-Maintained Fleet</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            Our fleet includes a mix of long-haul trucks, refrigerated trailers, and specialized vehicles—all regularly serviced and equipped with the latest technology to ensure maximum safety and efficiency.
                        </p>
                    </div>
                    <div className="bg-[#f6f6f6] p-8 rounded-md hover:shadow-xl transition-all shadow-2xl flex flex-col min-h-[260px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><RiTruckFill size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">Equipped for Any Load</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            We provide real-time tracking for every shipment so you can stay informed about the status of your goods, 24/7. Our advanced monitoring system allows us to track routes, optimize delivery times, and ensure everything is on schedule.
                        </p>
                    </div>
                    <div className="bg-[#f6f6f6] p-8 rounded-md transition-all shadow-2xl flex flex-col min-h-[260px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><PiTruckFill size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">Tracking & Monitoring</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            If your freight doesn’t require an entire truck, our LTL service provides a cost-effective alternative. Share space with other shipments while ensuring that your goods are securely handled and delivered on time.
                        </p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col md:flex-row p-6 md:p-20">
                <div className="md:w-[60%] md:px-20">
                    <h1 className="text-h1sm md:text-h1md lg:text-h1lg font-extrabold text-customPrimaryBlack font-ralway">SERVING YOU A NATIONWIDE</h1>
                    <h4 className="mt-4 text-5xl font-extrabold text-customSecondaryBlack sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway ">Local, Regional, and Long-Distance Deliveries</h4>
                    <p className="mt-6 text-customSecondaryBlack leading-normal text-md md:max-w-[95%] font-gotham">J&Harry Express serves clients across the nation, offering transportation solutions that meet the needs of businesses large and small. Wherever your goods need to go, we’re ready to make it happen.</p>
                </div>
                <div className="py-6 md:p-0 md:w-[40%] rounded-2xl overflow-hidden">
                    <img className="rounded-2xl h-[100%]" src={trucknature} alt="truck" />
                </div>
            </section>
            <section className="flex md:p-20 flex-col-reverse md:flex-row bg-customPrimaryColor">
                <div className="p-6 md:w-[60%]">
                    <h2 className="text-h2sm md:text-h2md lg:text-h2lg font-bold text-white leading-normal font-ralway">REQUEST A FREE QUOTE TODAY</h2>
                    <h4 className="mt-4 text-5xl font-extrabold text-white leading-normal font-ralway ">Let’s Get Your Freight Moving</h4>
                    <p className="text-lg my-5 text-white mt-4 font-gotham" >Ready to streamline your shipping process with a reliable, cost-effective trucking partner? Get in touch with us today to request a free quote. Whether you need full truckload shipping, expedited delivery, or specialized hauling, we’ll provide you with an accurate estimate tailored to your needs.</p>
                    <Link to={"/contact"}><button className="text-lg text-white bg-customSecondaryColor px-10 py-3 rounded-md mt-10 mb-10 font-gotham">Request a Quote</button></Link>
                </div>
                <div className="md:w-[40%]">
                    <img className="w-[100%]" src={WhiteTruck} alt="truck-image" />
                </div>
            </section>
        </>
    )
}

export default Dashboard;