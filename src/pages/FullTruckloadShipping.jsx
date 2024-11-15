import { IoLocation } from "react-icons/io5";
import { PiTruckFill } from "react-icons/pi";
import { RiTruckFill } from "react-icons/ri";
import { TbUrgent } from "react-icons/tb";
import Slider from "react-slick";

const FullTruckLoadShipping = () => {


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
                <p className="text-customPrimaryColor text-lg ">Home <span className="text-customWhiteColor font-gotham">/ Full Trcuckload Shipping</span></p>
                <h1 className="text-h1sm md:text-h1md lg:text-h1lg text-white font-ralway md:mb-[15px]">FULL TRUCKLOAD (FTL) SERVICE</h1>
                <h4 className="mt-4 text-5xl font-extrabold text-white sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway" >Reliable, Timely, and Cost-Effective Freight Solutions for Large Shipments</h4>
                <p className="text-customWhiteColor text-lg max-w-[800px] font-gotham mt-4" >When you have a large shipment that requires the full use of a truck, look no further than Full Truckload (FTL) service with J&Harry Express. FTL is the ideal solution for businesses with large or high-priority freight that needs to reach its destination quickly, safely, and securely. With our FTL services, your shipment gets the exclusive use of an entire truck, ensuring that it moves directly from point A to point B without the delays or stops associated with Less Than Truckload (LTL) shipping.</p>
                <p className="text-customWhiteColor text-lg max-w-[800px] font-gotham mt-4" >Our team of experienced professionals and well-maintained fleet ensures that your goods arrive on time and in excellent condition—no matter the distance. Whether you’re shipping across town, across the country, or even across the border, we have the right solution for your needs.</p>
                <button className="text-lg text-white bg-btnColor px-10 py-3 rounded-md mt-10 mb-10 font-gotham">Request a quote</button>
            </section>
            <section className="p-6 md:p-20">
                <h1 className="text-h1sm md:text-h1md lg:text-h1lg text-customSecondaryBlack font-ralway md:mb-[15px]">WHAT IS FULL TRUCKLOAD (FTL) SERVICE?</h1>
                <h4 className="mt-4 text-5xl font-extrabold text-customSecondaryBlack sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway" >The Fastest, Most Efficient Service Solution for Large Loads</h4>
                <p className="text-customSecondaryBlack text-lg max-w-[1200px] font-gotham mt-4" >Full Truckload (FTL) service refers to shipments where the entire truck is dedicated to a single customer’s freight. This means that your goods are the only ones being transported on that truck, and the truck will travel directly from the pickup location to the destination without making additional stops to load or unload other shipments.</p>
                <p className="text-customSecondaryBlack text-lg max-w-[1200px] font-gotham mt-2" >FTL service is the most efficient option for large shipments, high-priority freight, or time-sensitive deliveries. It offers faster transit times and more direct routes compared to LTL service, making it an ideal choice for businesses that need to move large quantities of goods or need quick, uninterrupted delivery.</p>
            </section>
            <section className="bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/bk-services.png')] bg-no-repeat bg-cover bg-center pb-28 overflow-x-hidden">
                <div className="md:w-[75%] p-6 md:p-20 flex flex-col justify-center items-start">
                    <h2 className="text-h1sm md:text-h1md lg:text-h1lg font-extrabold text-white font-ralway leading-normal" >HOW FTL SERVICE WORKS</h2>
                    <h4 className="mt-4 text-5xl font-extrabold text-white text leading-normal font-ralway" >The Seamless Process for Large Shipments</h4>
                </div>
                <div className="">
                    <Slider {...settings}>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[460px] sm:min-h-[540px] md:min-h-[350px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">1. Booking Your FTL Shipment</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Start by contacting us to provide the details of your shipment, including its size, weight, and delivery destination. Our logistics team will work with you to determine the best route and provide you with a competitive quote for your shipment.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[460px] sm:min-h-[540px] md:min-h-[350px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">2. Scheduling Pickup</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Once your booking is confirmed, we’ll schedule a convenient time for pickup. We understand that time is critical, so we ensure the truck is ready and on its way to pick up your goods on schedule.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[460px] sm:min-h-[540px] md:min-h-[350px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">3. Transport and Direct Delivery</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Your shipment will be loaded onto a dedicated truck. With FTL service, we take the most direct route possible to minimize delays and ensure that your goods arrive on time. Since the truck is dedicated solely to your freight, there are no additional stops for loading or unloading other shipments, ensuring the fastest and most efficient delivery.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[460px] sm:min-h-[540px] md:min-h-[350px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">4. On-Time, Secure Delivery</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Once the shipment arrives at its destination, our team ensures safe unloading. We work closely with our drivers to track your shipment in real-time, providing you with updates and ensuring that everything arrives in perfect condition.
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
            <section className="p-6 md:p-20 bg-[#f6f6f6]">
                <div className="pb-6 md:pb-10 md:w-[75%] flex flex-col justify-center items-start">
                    <h2 className="text-h1sm md:text-h1md lg:text-h1lg font-extrabold text-customSecondaryBlack font-ralway leading-normal" >BENEFITS OF FULL TRUCKLOAD (FTL) SERVICE</h2>
                    <h4 className="mt-4 text-5xl font-extrabold text-customSecondaryBlack text leading-normal font-ralway" >Why Choose FTL Service with J&Harry Express ?</h4>
                    <p className="text-md leading-normal text-customSecondaryBlack mt-1 font-gotham" >Full Truckload (FTL) shipping offers several significant benefits, especially for businesses that need to move large or time-sensitive shipments. Here are the main advantages of choosing FTL shipping with J&Harry Express :</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="bg-white p-8 rounded-md hover:shadow-xl transition-all shadow-2xl flex flex-col min-h-[300px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><IoLocation size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">1. Faster Transit Times</h4>
                        </div>
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            FTL shipments are typically faster than LTL shipments because they travel directly from pickup to delivery without any additional stops for other customers. If your freight needs to arrive as quickly as possible, FTL is the ideal option.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-md hover:shadow-xl transition-all shadow-2xl flex flex-col min-h-[300px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><RiTruckFill size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">2. Dedicated Space and Exclusive Use</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            When you choose FTL service, your goods have the exclusive use of the entire truck. This means no shared space with other shippers and no handling or unloading between pickups and deliveries. Your shipment will be handled with extra care and delivered directly to its destination.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-md transition-all shadow-2xl flex flex-col min-h-[300px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><PiTruckFill size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">3. Security and Safety</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            With FTL, your shipment stays with the same truck and driver throughout the entire journey, reducing the risk of damage or loss. The truck is dedicated to your freight, so there is less chance of delays or mishandling compared to other shipping methods.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-md bg-[#ffffff] transition-all shadow-2xl flex flex-col min-h-[300px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><TbUrgent size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">4. Cost-Effectiveness for Large Shipments</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            While FTL service may seem more expensive upfront compared to LTL (due to the exclusive use of a truck), it can be more cost-effective for businesses that have enough freight to fill an entire truck. You’re paying for the entire truck’s capacity, which can be more economical than sharing space with other shippers when you have a large shipment.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-md bg-[#ffffff] transition-all shadow-2xl flex flex-col min-h-[300px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><IoLocation size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">5. Flexible Scheduling and Reliable Delivery</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            FTL services allow for more flexible pickup and delivery scheduling. We work with your timeline and ensure your goods are delivered on the day you need them, with fewer constraints than LTL services.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-md bg-[#ffffff] transition-all shadow-2xl flex flex-col min-h-[300px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><IoLocation size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway"> 6. Less Handling and Reduced Risk of Damage</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            Because the truck is dedicated solely to your freight, there is less handling involved. With fewer load and unload cycles, your shipment is less likely to be damaged, especially if it's fragile or sensitive.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/bk-services.png')] bg-no-repeat bg-cover bg-center pb-28 overflow-x-hidden">
                <div className="md:w-[75%] p-6 md:p-20 flex flex-col justify-center items-start">
                    <h2 className="text-h1sm md:text-h1md lg:text-h1lg font-extrabold text-white font-ralway leading-normal" >TYPES OF FREIGHT IDEAL FOR FTL SERVICE</h2>
                    <p className="text-white text-lg max-w-[1200px] font-gotham mt-4" >Full Truckload service is ideal for a wide variety of freight types, especially when the volume is large or the delivery timeline is critical. Here are some examples of freight that typically benefits from FTL service:</p>
                </div>
                <div className="">
                    <Slider {...settings}>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[330px] sm:min-h-[380px] lg:min-h-[275px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">Bulk Shipments</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Large quantities of goods that need to be delivered together, such as raw materials, pallets of products, or large orders.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[330px] sm:min-h-[380px] lg:min-h-[275px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">Heavy Equipment and Machinery</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Oversized or heavy items that require special handling or dedicated transport, such as industrial machinery, construction equipment, or vehicles.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[330px] sm:min-h-[380px] lg:min-h-[275px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">Perishable Goods</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    If you're shipping perishable goods, such as fresh food or pharmaceuticals, FTL allows for temperature-controlled environments (with refrigerated trucks), ensuring your goods arrive in optimal condition.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[330px] sm:min-h-[380px] lg:min-h-[275px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">High-Value or Sensitive Goods</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Valuable items that need dedicated, secure transport—like electronics, fine art, or specialized medical equipment.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[330px] sm:min-h-[380px] lg:min-h-[275px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">Time-Sensitive Freight</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Shipments that need to arrive quickly, like seasonal products, promotional materials, or other time-critical goods.
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
            <section className="relative md:pt-[0px]">
                <div className="bg-customPrimaryColor p-6 md:hidden border-0" >
                    <img className="md:w-[400px] lg:w-[700px]" src="https://deltaexpressinc.com/wp-content/uploads/2023/01/ask-images.png" alt="truck-image" />
                </div>
                <div className="bg-customPrimaryColor p-6 md:py-20 md:px-20 border-0">
                    <h2 className="text-h2sm md:text-h2md lg:text-h2lg font-bold text-white leading-normal font-ralway md:max-w-[50%]">GET A QUOTE<br className="lg:hidden" /> FOR FTL <br />SERVICE</h2>
                    <p className="text-lg my-5 text-white mt-4 max-w-[450px] font-gotham" >Ready to ship your large freight? Get in touch with us today for a free, no-obligation quote for your Full Truckload shipping needs. Our team will provide you with a competitive rate and work with you to create the best shipping solution for your business.</p>
                    <p className="text-lg my-5 text-white mt-4 max-w-[450px] font-gotham" >Simply provide us with the details of your shipment, including its size, weight, and delivery destination, and we’ll get back to you with a tailored shipping solution.</p>
                    <button className="text-lg text-white bg-btnColor px-10 py-3 rounded-md font-gotham">Request a Quote</button>
                </div>
                <div className="hidden md:block md:absolute bottom-[70%] right-[50%] translate-x-[50%] md:translate-x-[0%] md:right-[40px] md:bottom-[35%] lg:bottom-[100px]" >
                    <img className="md:w-[400px] lg:w-[700px]" src="https://deltaexpressinc.com/wp-content/uploads/2023/01/ask-images.png" alt="truck-image" />
                </div>
            </section>
        </>
    )
}

export default FullTruckLoadShipping;