import { IoLocation } from "react-icons/io5";
import { PiTruckFill } from "react-icons/pi";
import { RiTruckFill } from "react-icons/ri";
import { TbUrgent } from "react-icons/tb";
import Slider from "react-slick";

const CrossBorderShipping = () => {



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
            <section className="p-6 lg:p-20 bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/bk-canada.png')] bg-center bg-no-repeat bg-cover">
                <p className="text-customPrimaryColor text-lg ">Home / <span className="text-customWhiteColor font-gotham">Cross Border Shipping Services</span></p>
                <h1 className="pt-4 text-customWhiteColor font-extrabold text-h1sm md:text-h1md lg:text-h1lg leading-normal font-ralway">CROSS BORDER SHIPING SERVICES</h1>
                <h4 className="mt-4 text-5xl font-extrabold text-white sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway" >Efficient and Reliable Freight Solutions Across the U.S., Canada, and Mexico</h4>
                <p className="max-w-[1050px] text-white mt-4 font-gotham">Shipping goods across international borders can be complex, but with J&Harry Express, you can rely on our expertise to make the process smooth, cost-effective, and efficient. Our Cross Border Shipping Services provide a seamless solution for companies that need to transport goods between the U.S., Canada, and Mexico. Whether you're shipping raw materials, finished products, or anything in between, we offer reliable and timely freight services across North America.</p>
                <p className="max-w-[1050px] text-white my-2 font-gotham">We specialize in managing the complexities of cross-border shipping, from customs documentation to route optimization, ensuring that your goods arrive on time and in perfect condition. With a fleet of well-maintained trucks and a dedicated logistics team, we are your trusted partner for cross-border freight transportation.</p>
                <button className="text-lg text-white bg-btnColor px-10 py-3 rounded-md mt-10 mb-10 font-gotham">Request a Quote</button>
            </section>
            <section className="p-6 md:p-20">
                <h1 className="text-customSecondaryBlack font-ralway md:mb-[15px] text-h1sm md:text-h1md lg:text-h1lg">WHAT IS CROSS BORDER SHIPPING?</h1>
                <h4 className="mt-4 text-5xl font-extrabold text-customSecondaryBlack sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway" >Seamless Transport Across International Borders</h4>
                <p className="text-customSecondaryBlack text-lg max-w-[1200px] font-gotham mt-4" >Cross-border shipping involves the movement of goods between countries—specifically, across the borders of the U.S., Canada, and Mexico. It requires specialized knowledge of each country’s customs regulations, tariffs, and import/export processes to ensure that goods are transported smoothly and without delays.</p>
                <p className="text-customSecondaryBlack text-lg max-w-[1200px] font-gotham mt-2" >At <span className="font-ralway font-[900]">J&Harry Express</span>, we handle all the complexities associated with cross-border freight, including:</p>
                <h4 className="mt-4 text-5xl font-extrabold text-customSecondaryBlack sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway" >Customs Documentation & Compliance</h4>
                <p className="text-customSecondaryBlack text-lg max-w-[1200px] font-gotham mt-1" >We ensure that all necessary paperwork, including customs declarations, certificates of origin, and tariff codes, are properly completed to avoid any delays at the border.</p>
                <h4 className="mt-4 text-5xl font-extrabold text-customSecondaryBlack sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway" >Route Optimization</h4>
                <p className="text-customSecondaryBlack text-lg max-w-[1200px] font-gotham mt-1" >Our logistics team identifies the most efficient routes to avoid border delays and reduce transit time while ensuring compliance with local regulations.</p>
                <h4 className="mt-4 text-5xl font-extrabold text-customSecondaryBlack sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway" >Tariff and Duty Management</h4>
                <p className="text-customSecondaryBlack text-lg max-w-[1200px] font-gotham mt-1" >We provide assistance in understanding and managing tariffs, duties, and taxes that may apply to your shipment, helping you plan your cross-border shipping costs effectively.</p>
                <h4 className="mt-4 text-5xl font-extrabold text-customSecondaryBlack sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway" >Customs Brokerage Assistance</h4>
                <p className="text-customSecondaryBlack text-lg max-w-[1200px] font-gotham mt-1" >We work with trusted customs brokers to handle the clearance process at both U.S. and Canadian/Mexican borders, ensuring a hassle-free experience for your freight.</p>
            </section>
            <section className="bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/bk-services.png')] bg-no-repeat bg-cover bg-center pb-28 overflow-x-hidden">
                <div className="md:w-[75%] p-6 md:p-20 flex flex-col justify-center items-start">
                    <h2 className="text-h1sm md:text-h1md lg:text-h1lg tfont-extrabold text-white font-ralway leading-normal" >HOW OUR CROSS BORDER SHIPPING SERVICE WORKS</h2>
                    <h4 className="mt-4 text-5xl font-extrabold text-white text leading-normal font-ralway" >Simplified, Transparent, and Secure Cross-Border Freight Solutions</h4>
                    <p className="text-md leading-normal text-white mt-2 font-gotham" >At J&Harry Express, we prioritize efficiency, transparency, and security for every shipment we handle across borders. Here’s how our cross-border shipping service works:</p>
                </div>
                <div className="">
                    <Slider {...settings}>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[550px] lg:min-h-[350px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">1. Get in Touch for a Quote</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Start by reaching out to us with the details of your shipment, including its destination, size, weight, and any specific delivery requirements. We will provide you with a customized quote tailored to your needs.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[550px] lg:min-h-[350px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">2. Customs Documentation & Planning</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Our logistics team will prepare all necessary documentation for the shipment, including invoices, export declarations, and import permits. We’ll also coordinate with customs brokers to ensure all paperwork is correct and up to date.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[550px] lg:min-h-[350px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">3. Route Optimization and Dispatch</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    We plan the best route based on your shipment’s origin and destination. We take into consideration factors like road conditions, border crossing times, and any seasonal or regulatory restrictions. Once the route is confirmed, we dispatch the appropriate vehicle and driver for the journey.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[550px] lg:min-h-[350px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">4. Real-Time Tracking & Monitoring</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Throughout the entire shipping process, you’ll have access to real-time tracking updates. We use GPS and tracking systems to ensure that you’re always aware of your shipment’s location, including estimated delivery times.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[550px] lg:min-h-[350px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">5. Customs Clearance & Border Crossing</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    When your freight reaches the border, our experienced team ensures that all customs procedures are followed. We work with trusted customs brokers to handle the paperwork and ensure that your goods are cleared without delays.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[550px] lg:min-h-[350px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">6. On-Time Delivery</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Once customs clearance is complete, our drivers will continue the journey and deliver your goods to the final destination. Our on-time delivery guarantee ensures that your cross-border shipments arrive when expected, no matter the complexity of the logistics involved.
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
            <section className="p-6 md:p-20 bg-[#f6f6f6]">
                <div className="pb-6 md:pb-10 md:w-[75%] flex flex-col justify-center items-start">
                    <h2 className="text-h1sm md:text-h1md lg:text-h1lg font-extrabold text-customSecondaryBlack font-ralway leading-normal" >WHY CHOOSE J&HARRY EXPRESS  FOR CROSS BORDER SHIPPING?</h2>
                    <h4 className="mt-4 text-5xl font-extrabold text-customSecondaryBlack text leading-normal font-ralway" >Experience, Expertise, and Reliability for International Freight</h4>
                    <p className="text-md leading-normal text-customSecondaryBlack mt-1 font-gotham" >When it comes to shipping goods across borders, you need a logistics partner who understands the intricacies of international trade. Here’s why J&Harry Express Trucking is the preferred choice for businesses moving freight between the U.S., Canada, and Mexico:</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="bg-white p-8 rounded-md hover:shadow-xl transition-all shadow-2xl flex flex-col min-h-[300px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><IoLocation size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">1. Expert Knowledge of Cross Border Logistics</h4>
                        </div>
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            We have extensive experience managing cross-border shipments between the U.S., Canada, and Mexico. Our team is well-versed in the regulations and requirements of each country, ensuring that your freight is handled with expertise at every stage of the journey.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-md hover:shadow-xl transition-all shadow-2xl flex flex-col min-h-[300px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><RiTruckFill size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">2. Comprehensive Customs Support</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            Customs compliance can be a challenge when moving freight internationally. At J&Harry Express Trucking, we help you navigate the customs process with ease, from preparing accurate documentation to working with customs brokers to ensure your shipment clears without delays.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-md transition-all shadow-2xl flex flex-col min-h-[300px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><PiTruckFill size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">3. Route Optimization for Faster Delivery</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            We understand that timely delivery is crucial for cross-border shipments. Our logistics team uses the latest technology to optimize routes, minimize border crossing delays, and ensure the fastest possible transit time.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-md bg-[#ffffff] transition-all shadow-2xl flex flex-col min-h-[300px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><TbUrgent size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">4. Real-Time Tracking and Transparency</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            Stay informed throughout the entire shipping process. Our real-time tracking system allows you to monitor your shipment from pickup to delivery, so you always know where your goods are and when they will arrive.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-md bg-[#ffffff] transition-all shadow-2xl flex flex-col min-h-[300px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><IoLocation size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">5. Secure and Reliable Transport</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            Security is paramount when transporting goods across borders. Our fleet is equipped with the latest tracking and security features to ensure that your shipment is protected at all times, from loading to delivery.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-md bg-[#ffffff] transition-all shadow-2xl flex flex-col min-h-[300px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><IoLocation size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway"> 6. Flexible Solutions for Your Shipping Needs</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            Whether you are shipping large full truckloads (FTL), smaller less-than-truckload (LTL) shipments, or oversized cargo, we offer flexible cross-border shipping solutions tailored to your needs. No shipment is too big or small for us to handle.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/bk-services.png')] bg-no-repeat bg-cover bg-center pb-28 overflow-x-hidden">
                <div className="md:w-[75%] p-6 md:p-20 flex flex-col justify-center items-start">
                    <h2 className="text-h1sm md:text-h1md lg:text-h1lg font-extrabold text-white font-ralway leading-normal" >TYPES OF SHIPMENTS WE HANDLE ACROSS BORDERS</h2>
                    <p className="text-md leading-normal text-white mt-6 font-gotham" >Our cross-border shipping services cater to a wide range of industries and types of freight. Here are some of the most common types of shipments we handle between the U.S., Canada, and Mexico:</p>
                </div>
                <div className="">
                    <Slider {...settings}>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[400px] md:min-h-[300px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">Manufacturing Parts and Raw Materials</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Moving raw materials or parts needed for production? We ensure your supplies arrive quickly and securely to keep your production lines running smoothly.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[400px] md:min-h-[300px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">Finished Goods and Consumer Products</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    We deliver finished products directly to retailers, wholesalers, or customers, ensuring that your business stays stocked and your customers are satisfied.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[400px] md:min-h-[300px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">Automotive and Heavy Equipment</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Transporting automotive parts, vehicles, or machinery between countries? We handle everything from car parts to heavy-duty equipment with care and expertise.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[400px] md:min-h-[300px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">Perishable Goods and Food</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Need to ship fresh or frozen food products across borders? We provide temperature-controlled shipping solutions to keep your goods fresh and compliant with food safety regulations.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[400px] md:min-h-[300px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">Pharmaceuticals and Medical Supplies</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Shipping medical equipment or pharmaceuticals? We ensure compliance with all health regulations while delivering your time-sensitive goods safely.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[400px] md:min-h-[300px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">Consumer Electronics and High-Value Goods</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    We handle sensitive electronics and valuable goods with the highest level of security and care, ensuring they arrive safely and on time.
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
            <section className="relative lg:pt-[0px] lg:pt-[150px]">
                <div className="block lg:hidden bg-customPrimaryColor p-6 md:hidden border-0" >
                    <img className="md:w-[400px] lg:w-[700px]" src="https://deltaexpressinc.com/wp-content/uploads/2023/01/ask-images.png" alt="truck-image" />
                </div>
                <div className="bg-customPrimaryColor py-20 p-6 md:px-20">
                    <h2 className="text-h1sm md:text-h1md lg:text-h1lg font-bold text-white font-ralway">GET A QUOTE<br className="lg:hidden" /> FOR CROSS <br />BORDER SHIPPING</h2>
                    <p className="text-lg my-5 text-white mt-4 lg:max-w-[450px] font-gotham" >Ready to ship goods across the U.S., Canada, or Mexico? Our cross-border shipping services are designed to meet your needs, ensuring fast, secure, and efficient transportation of your freight.</p>
                    <p className="text-lg my-5 text-white mt-4 lg:max-w-[450px] font-gotham" >Provide us with the details of your shipment, including size, destination, and any specific requirements, and we’ll give you a customized quote.</p>
                    <button className="text-lg text-white bg-btnColor px-10 py-2 rounded-md font-gotham">Request a Quote</button>
                </div>
                <div className="hidden lg:block absolute bottom-[65%] right-[50%] translate-x-[50%] md:translate-x-[0%] md:right-[40px] md:bottom-[100px]" >
                    <img className="md:w-[400px] xl:w-[700px]" src="https://deltaexpressinc.com/wp-content/uploads/2023/01/ask-images.png" alt="truck-image" />
                </div>
            </section>
        </>
    )
}

export default CrossBorderShipping;