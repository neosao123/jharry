import { IoLocation } from "react-icons/io5";
import { PiTruckFill } from "react-icons/pi";
import { RiTruckFill } from "react-icons/ri";
import { TbUrgent } from "react-icons/tb";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Expedited = () => {

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
            <section className="bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/03/main_screen.webp')] bg-no-repeat bg-cover bg-center p-6 md:p-20">
                <p className="text-customPrimaryColor text-lg ">Home <span className="text-customWhiteColor font-gotham">/ Expedited Loads Service</span></p>
                <h1 className="text-white text-h1sm md:text-h1md lg:text-h1lg font-ralway md:mb-[15px]">EXPEDITED LOADS SERVICE</h1>
                <h4 className="mt-4 text-5xl font-extrabold text-white sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway" >Fast, Reliable Shipping for Time-Sensitive Freight</h4>
                <p className="text-customWhiteColor text-lg max-w-[800px] font-gotham mt-4" >When time is of the essence, you need a logistics partner you can trust to deliver your goods quickly and efficiently. At <span className="font-ralway font-[900]">J&Harry Express</span>, we specialize in <span className="font-ralway font-[900]">Expedited Loads Services</span>, offering fast, reliable transportation solutions for urgent shipments that need to reach their destination without delay. Whether you’re dealing with an unexpected order, emergency restocking, or any other time-sensitive freight, we’re here to help you get your goods delivered on time, every time.</p>
                <p className="text-customWhiteColor text-lg max-w-[800px] font-gotham mt-4" >With our fleet of well-maintained trucks and experienced drivers, we ensure that your expedited loads are handled with the highest level of care, speed, and reliability. We offer customized solutions for businesses that need fast delivery—whether it’s across town, across the country, or even cross-border. Our expedited services prioritize your shipment, ensuring direct routes, fewer stops, and real-time updates.</p>
                <button className="text-lg text-white bg-btnColor px-10 py-3 rounded-md mt-10 mb-10 font-gotham">Request a quote</button>
            </section>
            <section className="p-6 md:p-20">
                <h1 className="text-customSecondaryBlack font-ralway md:mb-[15px] text-h1sm md:text-h1md lg:text-h1lg">WHAT IS EXPEDITED SHIPPING?</h1>
                <h4 className="mt-4 text-5xl font-extrabold text-customSecondaryBlack sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway" >Fast, Reliable Shipping for Time-Sensitive Freight</h4>
                <p className="text-customSecondaryBlack text-lg max-w-[1200px] font-gotham mt-4" >Expedited freight shipping is a service designed to ensure that your time-sensitive shipments arrive as quickly as possible. Unlike standard shipping, expedited services prioritize your load, ensuring it gets immediate attention and a direct route to its destination. With expedited shipping, you’re not just paying for faster delivery, you’re ensuring that your freight is moved quickly with fewer delays.</p>
                <p className="text-customSecondaryBlack text-lg max-w-[1200px] font-gotham mt-2" >Typically, expedited shipping is used for:</p>
                <h4 className="mt-4 text-5xl font-extrabold text-customSecondaryBlack sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway" >1. Critical Deliveries</h4>
                <p className="text-customSecondaryBlack text-lg max-w-[1200px] font-gotham mt-1" >Shipments that are essential for business operations, such as last-minute product orders, parts for manufacturing, or equipment for a construction job.</p>
                <h4 className="mt-4 text-5xl font-extrabold text-customSecondaryBlack sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway" >2. Emergency Orders</h4>
                <p className="text-customSecondaryBlack text-lg max-w-[1200px] font-gotham mt-1" >Urgent replacements or stock replenishments that need to arrive without delay to avoid production stoppages or service disruptions.</p>
                <h4 className="mt-4 text-5xl font-extrabold text-customSecondaryBlack sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway" >3. Perishable Goods</h4>
                <p className="text-customSecondaryBlack text-lg max-w-[1200px] font-gotham mt-1" >Temperature-sensitive shipments (e.g., food, pharmaceuticals) that require both speed and care to avoid spoilage.</p>
                <h4 className="mt-4 text-5xl font-extrabold text-customSecondaryBlack sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway" >4. High-Value Items</h4>
                <p className="text-customSecondaryBlack text-lg max-w-[1200px] font-gotham mt-1" >Expedited shipping for expensive or delicate items that need secure, timely delivery.</p>
                <p className="text-customSecondaryBlack text-lg max-w-[1200px] font-gotham mt-6" >Expedited freight services are commonly utilized by industries such as manufacturing, retail, healthcare, automotive, and more.</p>
            </section>
            <section className="bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/bk-services.png')] bg-no-repeat bg-cover bg-center pb-28 overflow-x-hidden">
                <div className="md:w-[75%] p-6 md:p-20 flex flex-col justify-center items-start">
                    <h2 className="text-h1sm md:text-h1md lg:text-h1lg font-extrabold text-white font-ralway leading-normal" > HOW OUR EXPEDITED LOADS SERVICE WORKS</h2>
                    <h4 className="mt-4 text-5xl font-extrabold text-white text leading-normal font-ralway" >Fast, Transparent, and Stress-Free Shipping for Your Urgent Needs</h4>
                    <p className="text-md leading-normal text-white mt-6 font-gotham" >At <span className="font-ralway text-white font-[900]">J&Harry Express</span>, we make expedited freight shipping simple and transparent. Here’s how our expedited loads service works</p>
                </div>
                <div className="">
                    <Slider {...settings}>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[450px] md:min-h-[320px] lg:min-h-[300px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">1. Get in Touch for a Quote</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Contact us with the details of your expedited shipment, including the destination, size, weight, and any time-sensitive requirements. We’ll provide you with a competitive quote based on the specifics of your shipment.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[450px] md:min-h-[320px] lg:min-h-[300px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">2. Immediate Priority</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Once you confirm the booking, we prioritize your load immediately. Our team works quickly to schedule a pickup time, dispatch the right truck, and plan the most efficient route to ensure timely delivery.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[450px] md:min-h-[320px] lg:min-h-[300px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">3. Direct Route & Fast Transit</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Your shipment is assigned to a dedicated driver, and we take the most direct route available to ensure the fastest delivery. Our experienced drivers are familiar with time-sensitive shipping and will avoid delays wherever possible.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[450px] md:min-h-[320px] lg:min-h-[300px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">4. Constant Updates and Tracking</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Throughout the transit, you’ll receive real-time updates on the status of your shipment. We use advanced GPS tracking and communication systems to keep you informed, ensuring that you always know where your goods are and when they will arrive.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[450px] md:min-h-[320px] lg:min-h-[300px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">5. On-Time Delivery</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    We guarantee on-time delivery for expedited loads. Our team takes all the necessary steps to ensure your shipment reaches its destination as quickly as possible, with minimal handling and stops.
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
            <section className="p-6 md:p-20 bg-[#f6f6f6]">
                <div className="pb-6 md:pb-10 md:w-[75%] flex flex-col justify-center items-start">
                    <h2 className="text-h1sm md:text-h1md lg:text-h1lg font-extrabold text-customSecondaryBlack font-ralway leading-normal" >BENEFITS OF EXPEDITED LOADS WITH J&HARRY EXPRESS TRUCKING</h2>
                    <h4 className="mt-4 text-5xl font-extrabold text-customSecondaryBlack text leading-normal font-ralway" >Why Choose Us for Your Time-Sensitive Freight?</h4>
                    <p className="text-md leading-normal text-customSecondaryBlack mt-1 font-gotham" >Choosing <span className="font-ralway text-customSecondaryBlack font-[900]">J&Harry</span> Express  for your expedited shipping needs provides several key advantages:</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="bg-white p-8 rounded-md hover:shadow-xl transition-all shadow-2xl flex flex-col min-h-[350px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><IoLocation size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">Speed and Reliability</h4>
                        </div>
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            We understand that when you need an expedited load, time is critical. Our fleet is equipped to handle urgent deliveries with speed and reliability, ensuring your shipment is delivered on time, every time.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-md hover:shadow-xl transition-all shadow-2xl flex flex-col min-h-[350px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><RiTruckFill size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">Dedicated, Priority Service</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            When you book expedited shipping with us, your load gets top priority. We assign a dedicated driver to your shipment, avoiding delays caused by other pickups or drop-offs. This ensures your goods are transported as quickly as possible.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-md transition-all shadow-2xl flex flex-col min-h-[350px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><PiTruckFill size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">Flexible, Customized Solutions</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            We work with you to understand your specific needs and create a customized shipping plan. Whether you need a full truckload, a smaller shipment, or even a specialized route, we provide flexible options to meet your requirements.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-md bg-[#ffffff] transition-all shadow-2xl flex flex-col min-h-[350px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><TbUrgent size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">Real-Time Tracking and Communication</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            Stay informed about your shipment’s progress with real-time tracking and constant updates. Our GPS-enabled fleet ensures that you’re always aware of your shipment’s location, and our customer service team is available to answer any questions you may have.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-md bg-[#ffffff] transition-all shadow-2xl flex flex-col min-h-[350px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><IoLocation size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">Secure and Professional Drivers</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            Our experienced drivers are trained to handle high-priority shipments with care and professionalism. They’re skilled in navigating fast routes and dealing with time-sensitive deliveries, ensuring your goods are in safe hands every step of the way.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-md bg-[#ffffff] transition-all shadow-2xl flex flex-col min-h-[350px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><IoLocation size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway"> Nationwide Coverage and Cross-Border Capabilities</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            Whether your expedited load needs to stay within the state, travel cross-country, or even cross the border into Canada or Mexico, we have the resources and expertise to handle it. Our nationwide and cross-border shipping options give you the flexibility to meet tight deadlines no matter where your goods are headed.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/bk-services.png')] bg-no-repeat bg-cover bg-center pb-20 overflow-x-hidden">
                <div className="md:w-[75%] p-6 md:p-20 flex flex-col justify-center items-start">
                    <h2 className="text-h1sm md:text-h1md lg:text-h1lg font-extrabold text-white font-ralway leading-normal" >TYPES OF SHIPMENTS IDEAL FOR EXPEDITED LOADS</h2>
                    <p className="text-md leading-normal text-white mt-4 font-gotham" >Our expedited freight services are perfect for a wide range of urgent and high-priority shipments. Here are some examples of the types of loads we commonly handle:</p>
                </div>
                <div className="">
                    <Slider {...settings}>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[220px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">Critical Manufacturing Parts</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Spare parts or machinery components that are needed immediately to avoid production delays or equipment downtime.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[220px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">Emergency Restocking Orders</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Quick restocking of retail products to prevent stockouts and keep shelves full during peak seasons or high-demand periods.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[220px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">Perishable Goods</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Temperature-sensitive shipments such as food, medical supplies, or pharmaceuticals that require timely delivery to ensure quality.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[220px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">Medical Equipment and Pharmaceuticals</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Time-sensitive deliveries of medical equipment, drugs, or vaccines that need to arrive on time to prevent disruptions in healthcare services.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[220px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">High-Value or Fragile Items</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Valuable items, including electronics, jewelry, or important documents, that require fast and secure transport.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[220px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">Time-Sensitive Deliveries</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    Shipments with strict deadlines, such as promotional materials, event equipment, or seasonal goods that need to arrive on schedule.
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
            <section className="relative md:pt-[250px]">
                <div className="bg-customPrimaryColor p-6 md:hidden border-0" >
                    <img className="md:w-[400px] lg:w-[700px]" src="https://deltaexpressinc.com/wp-content/uploads/2023/01/ask-images.png" alt="truck-image" />
                </div>
                <div className="bg-customPrimaryColor p-6 md:py-20 md:px-20">
                    <h2 className="text-h1sm md:text-h1md lg:text-h1lg font-bold text-white font-ralway lg:w-[50%]">GET A QUOTE FOR EXPEDITED LOADS</h2>
                    <p className="text-lg my-5 text-white mt-4 sm:max-w-[50%] font-gotham" >Need fast, reliable, and secure transportation for your time-sensitive freight? Get in touch with us today for a custom quote for your expedited shipping needs.</p>
                    <p className="text-lg my-5 text-white mt-4 sm:max-w-[50%] font-gotham" >Provide us with the details of your shipment, including the destination, weight, and urgency, and we will offer you the best expedited shipping solution tailored to your needs.</p>
                    <button className="text-lg text-white bg-btnColor px-10 py-3 rounded-md font-gotham">Request a Quote</button>
                </div>
                <div className="hidden md:block absolute bottom-[70%] md:bottom-[20%] right-[50%] translate-x-[50%] md:translate-x-[0%] md:right-[40px]" >
                    <img className="md:w-[400px] xl:w-[700px]" src="https://deltaexpressinc.com/wp-content/uploads/2023/01/ask-images.png" alt="truck-image" />
                </div>
            </section>
        </>
    )
}

export default Expedited;