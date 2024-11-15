import { IoLocation } from "react-icons/io5";
import { PiTruckFill } from "react-icons/pi";
import { RiTruckFill } from "react-icons/ri";
import { TbUrgent } from "react-icons/tb";
import Slider from "react-slick";

const Reefer = () => {

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
            <section className="bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/03/main_screen.webp')] bg-no-repeat bg-cover bg-center p-6 lg:p-20">
                <p className="text-customPrimaryColor text-lg ">Home <span className="text-customWhiteColor font-gotham">/ Reefer</span></p>
                <h1 className="text-white text-h1sm md:text-h1md lg:text-h1lg font-ralway md:mb-[15px]">REEFER SERVICES</h1>
                <h4 className="mt-4 text-5xl font-extrabold text-white sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway" >Reliable Temperature-Controlled Solutions for Your Sensitive Freight</h4>
                <p className="text-customWhiteColor text-lg max-w-[800px] font-gotham mt-4" >When your goods require a specific temperature range to ensure they arrive in optimal condition, look no further than <span className="font-ralway font-[900]">J&Harry Express's Reefer Services</span>. Our fleet of state-of-the-art refrigerated trucks (reefers) is designed to handle temperature-sensitive shipments with the highest level of care and efficiency. Whether you're transporting perishable food, pharmaceuticals, or other temperature-controlled products, we provide reliable and secure transportation to meet your exact needs.</p>
                <p className="text-customWhiteColor text-lg max-w-[800px] font-gotham mt-4" >We understand the critical importance of maintaining the proper temperature throughout the journey, and we are committed to ensuring your shipment arrives at its destination in perfect condition—on time and within your required temperature range.</p>
                <button className="text-lg text-white bg-btnColor px-10 py-3 rounded-md mt-10 mb-10 font-gotham">Request a quote</button>
            </section>
            <section className="p-6 md:p-20 bg-[#f6f6f6]">
                <div className="pb-6 md:pb-10 md:w-[75%] flex flex-col justify-center items-start">
                    <h2 className="text-h1sm md:text-h1md lg:text-h1lg font-extrabold text-customSecondaryBlack font-ralway leading-normal" >WHAT IS REEFER TRUCKING?</h2>
                    <h4 className="mt-4 text-5xl font-extrabold text-customSecondaryBlack text leading-normal font-ralway" >Temperature-Controlled Transport for Sensitive Shipments</h4>
                    <p className="text-md leading-normal text-customSecondaryBlack mt-4 font-gotham" >Reefer trucking involves the use of refrigerated trailers or trucks that maintain a specific temperature for sensitive goods during transportation. These trailers are equipped with refrigeration units that allow for the precise control of temperature, ensuring that goods are kept within the required range—whether that's a chilled, frozen, or controlled atmosphere.</p>
                    <p className="text-md leading-normal text-customSecondaryBlack mt-1 font-gotham" >Reefer services are commonly used for a wide range of industries that require temperature-sensitive shipments, including:</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="bg-white p-8 rounded-md hover:shadow-xl transition-all shadow-2xl flex flex-col min-h-[240px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><IoLocation size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">Food and Beverage</h4>
                        </div>
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            Fresh produce, dairy, meat, seafood, and frozen goods all require precise temperature control to maintain freshness and prevent spoilage.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-md hover:shadow-xl transition-all shadow-2xl flex flex-col min-h-[240px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><RiTruckFill size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">Pharmaceuticals and Medical Supplies</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            Certain medications, vaccines, and medical supplies need to be kept at specific temperatures to preserve their efficacy.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-md transition-all shadow-2xl flex flex-col min-h-[240px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><PiTruckFill size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">Cosmetics and Personal Care Products</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            Many cosmetics and personal care items, especially those with natural ingredients, require refrigeration to maintain their quality.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-md bg-[#ffffff] transition-all shadow-2xl flex flex-col min-h-[240px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><TbUrgent size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">Floral Shipments</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            Flowers and plants need to be transported in temperature-controlled environments to ensure they remain fresh and vibrant.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-md bg-[#ffffff] transition-all shadow-2xl flex flex-col min-h-[240px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><IoLocation size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">Other Specialized Goods</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            Various goods—such as chemicals, fragrances, and more—may require precise temperature regulation during transport.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/bk-services.png')] bg-no-repeat bg-cover bg-center pb-28 overflow-x-hidden">
                <div className="md:w-[75%] p-6 md:p-20 flex flex-col justify-center items-start">
                    <h2 className="text-h1sm md:text-h1md lg:text-h1lg font-extrabold text-white font-ralway leading-normal" > HOW OUR REEFER SERVICE WORKS</h2>
                    <h4 className="mt-4 text-5xl font-extrabold text-white text leading-normal font-ralway" >Efficient and Reliable Temperature-Controlled Shipping</h4>
                    <p className="text-md leading-normal text-white mt-2 font-gotham" >When you choose J&Harry Express for your reefer service needs, you get a dedicated and professional team committed to ensuring your shipment is handled with the utmost care and precision. Here’s how our reefer services work:</p>
                </div>
                <div className="">
                    <Slider {...settings}>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[520px] md:min-h-[480px] lg:min-h-[330px] xl:min-h-280px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">1. Booking and Consultation</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    We begin by consulting with you to understand the temperature requirements of your shipment. Whether it’s frozen, chilled, or at a specific ambient temperature, we’ll discuss your needs to ensure that we match the right equipment to your freight.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[520px] md:min-h-[480px] lg:min-h-[330px] xl:min-h-280px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">2. Loading and Temperature Setup</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Our experienced team ensures that your freight is loaded carefully into our refrigerated trailers. Before departure, we set the truck's refrigeration unit to the precise temperature you need, ensuring a safe and consistent environment for your goods.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[520px] md:min-h-[480px] lg:min-h-[330px] xl:min-h-280px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">3. Constant Monitoring</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Throughout the journey, our reefers are equipped with temperature monitoring systems that continuously track and maintain the internal environment. You’ll receive real-time updates on the status of your shipment, including temperature readings and transit progress.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[520px] md:min-h-[480px] lg:min-h-[330px] xl:min-h-280px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">4. Dedicated Routes and On-Time Delivery</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Reefer shipments are prioritized to ensure that your goods are delivered on time. With direct routes and fewer stops, we reduce the risk of exposure to temperature fluctuations, ensuring that your goods arrive within the required temperature range.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[520px] md:min-h-[480px] lg:min-h-[330px] xl:min-h-280px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">5. Final Delivery and Unloading</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Once your shipment reaches its destination, our team will handle the unloading process with care. We ensure that the proper temperature is maintained throughout the entire shipping process, from pickup to delivery.
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
            <section className="p-6 md:p-20 bg-[#f6f6f6]">
                <div className="pb-6 md:pb-10 md:w-[75%] flex flex-col justify-center items-start">
                    <h2 className="text-h1sm md:text-h1md lg:text-h1lg font-extrabold text-customSecondaryBlack font-ralway leading-normal" >BENEFITS OF REEFER SERVICES WITH J&HARRY EXPRESS TRUCKING</h2>
                    <h4 className="mt-4 text-5xl font-extrabold text-customSecondaryBlack text leading-normal font-ralway" >Why Choose Our Temperature-Controlled Shipping Solutions?</h4>
                    <p className="text-md leading-normal text-customSecondaryBlack mt-1 font-gotham" >When it comes to transporting temperature-sensitive goods, J&Harry Express Trucking offers numerous advantages that ensure your products arrive in perfect condition:</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="bg-white p-8 rounded-md hover:shadow-xl transition-all shadow-2xl flex flex-col min-h-[350px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><IoLocation size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">1. Precision Temperature Control</h4>
                        </div>
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            Our refrigerated trailers are equipped with advanced cooling technology, ensuring that your goods are kept within the precise temperature range required throughout the entire journey. Whether your shipment needs to be chilled at 32°F or frozen at -10°F, we maintain strict temperature control to prevent spoilage and maintain product integrity.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-md hover:shadow-xl transition-all shadow-2xl flex flex-col min-h-[350px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><RiTruckFill size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">2. Real-Time Temperature Monitoring</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            We use cutting-edge technology to monitor the internal temperature of our refrigerated trailers in real time. This allows both you and our team to track your shipment’s condition and make adjustments as needed. We provide 24/7 visibility into the status of your freight, giving you peace of mind throughout the transit.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-md transition-all shadow-2xl flex flex-col min-h-[350px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><PiTruckFill size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">3. Safe and Secure Transport</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            With our experienced drivers and well-maintained fleet, we ensure that your temperature-sensitive goods are transported securely. Our trailers are designed to handle the specific requirements of refrigerated transport, reducing the risks of contamination, temperature fluctuations, and damage.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-md bg-[#ffffff] transition-all shadow-2xl flex flex-col min-h-[350px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><TbUrgent size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">4. On-Time Delivery</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            We know how critical timing can be for temperature-sensitive shipments. Our efficient scheduling and dedicated routes ensure that your products are delivered on time, minimizing the risk of spoilage or damage due to delays. We provide clear timelines and maintain open communication to keep you updated on the status of your shipment.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-md bg-[#ffffff] transition-all shadow-2xl flex flex-col min-h-[350px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><IoLocation size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">5. Flexible Service Options</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            Our reefer services are flexible to meet your needs. Whether you need full truckload (FTL) or less-than-truckload (LTL) shipping, we can accommodate various sizes and types of temperature-sensitive shipments. We tailor our services to fit your unique requirements, ensuring the best solution for your business.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-md bg-[#ffffff] transition-all shadow-2xl flex flex-col min-h-[350px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><IoLocation size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">6. Experienced Team</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            Our team of professionals is highly experienced in handling temperature-sensitive freight. From our drivers to our customer service representatives, everyone at J&Harry Express Trucking is trained to prioritize safety, reliability, and the proper handling of your refrigerated shipments.
                        </p>
                    </div>
                </div>
            </section>
            <section className="relative pt-[150px] lg:pt-[250px]">
                <div className="bg-customPrimaryColor p-6 py-20 md:px-20">
                    <h2 className="text-h1sm md:text-h1md lg:text-h1lg font-bold text-white font-ralway lg:w-[50%]">GET A QUOTE FOR REEFER TRUCKING SERVICES</h2>
                    <p className="text-lg my-5 text-white mt-4 sm:max-w-[50%] font-gotham" >Are you ready to ship your temperature-sensitive freight with J&Harry Express ? Our team is here to provide you with a reliable and cost-effective solution for all your refrigerated shipping needs.</p>
                    <p className="text-lg my-5 text-white mt-4 sm:max-w-[50%] font-gotham" >Simply provide us with the details of your shipment, including size, weight, and temperature requirements, and we will work with you to design the ideal shipping solution.</p>
                    <button className="text-lg text-white bg-btnColor px-10 py-3 rounded-md font-gotham">Request a Quote</button>
                </div>
                <div className="absolute bottom-[70%] md:bottom-[20%] right-[50%] translate-x-[50%] md:translate-x-[0%] md:right-[40px]" >
                    <img className="md:w-[400px] xl:w-[700px]" src="https://deltaexpressinc.com/wp-content/uploads/2023/01/ask-images.png" alt="truck-image" />
                </div>
            </section>
        </>
    )
}

export default Reefer;