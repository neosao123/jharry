import { IoLocation } from "react-icons/io5";
import { PiTruckFill } from "react-icons/pi";
import { RiTruckFill } from "react-icons/ri";
import { TbUrgent } from "react-icons/tb";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Truck from "../assets/truck.jpg"
import TruckBgImage from "../assets/truckBgImage.jpg";
import WhiteTruck from "../assets/whiteTruck.png"

const LTLFrieght = () => {

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
            <section style={{ backgroundImage: `url(${TruckBgImage})` }} className="px-6 pt-10 md:px-20 md:py-10 bg-center bg-no-repeat bg-cover">
                <p className="text-customPrimaryColor text-lg font-gotham">Home <span className="text-customWhiteColor">/ Less Than Truckload (LTL)</span></p>
                <h1 className="pt-6 text-customWhiteColor font-extrabold text-h1sm md:text-h1md lg:text-h1lg leading-normal font-ralway">LESS THAN TRUCKLOAD (LTL)</h1>
                <h4 className="mt-4 text-5xl font-extrabold text-white sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway">Dependable. Efficient. Trusted Nationwide.</h4>
                <p className="text-customWhiteColor text-lg md:max-w-[60%] mt-6 font-gotham">At <span className="font-ralway font-[900]">J&Harry Express</span>, we understand that not every shipment requires an entire truck. That’s why we offer <span className="font-ralway font-[900]">Less Than Truckload (LTL) service</span>—a cost-effective and flexible solution for businesses that need to ship smaller loads but still want the reliability and efficiency of a professional trucking service. With LTL, your goods share space with other shipments, which helps reduce costs while maintaining the safety and timeliness of your delivery.</p>
                <p className="text-customWhiteColor text-lg md:max-w-[60%] mt-4 font-gotham">Whether you’re shipping across town or across the country, our LTL services provide an affordable and efficient way to meet your freight needs without the need for a full truckload. Here’s everything you need to know about our LTL services.</p>
                <button type="button" className="text-lg text-white bg-customSecondaryColor px-10 py-3 mt-6 mb-20 rounded-md font-gotham">Request a quote</button>
            </section>
            <section className="p-8 md:px-20 md:py-10 flex flex-col md:flex-row gap-10">
                <div className="md:w-[55%] md:p-10 flex flex-col justify-center items-start">
                    <h2 className="text-h1sm md:text-h1md lg:text-h1lg font-extrabold text-customSecondaryBlack font-ralway leading-normal" >WHAT IS LTL SERVICE?</h2>
                    <h4 className="mt-4 text-5xl font-extrabold text-customSecondaryBlack sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway" >The Perfect Solution for Smaller Freight Loads</h4>
                    <p className="text-md leading-normal text-customSecondaryBlack mt-6 font-gotham" ><span className="font-ralway font-[900]">Less Than Truckload (LTL)</span> service is a method where multiple shippers share the same truck, but each shipper only pays for the portion of the truck they use. It’s ideal for businesses that don’t have enough freight to fill an entire truck but still need the speed, reliability, and security that comes with using a dedicated shipping service.</p>
                    <p className="text-md leading-normal text-customSecondaryBlack mt-4 font-gotham" >With LTL service, your goods will be combined with those of other customers to maximize efficiency, reduce Service costs, and allow for faster delivery times. Despite sharing space with other shipments, your goods are handled separately and securely, ensuring they arrive at their destination safely.</p>
                </div>
                <div className="md:w-[45%] md:p-10">
                    <img src="https://deltaexpressinc.com/wp-content/uploads/2023/01/ltl-freight-quote.png" alt="image" />
                </div>
            </section>
            <section style={{ backgroundImage: `url(${Truck})` }} className="bg-no-repeat bg-cover bg-center pb-28 overflow-x-hidden">
                <div className="p-8 md:p-20">
                    <h1 className="text-white text-h1sm md:text-h1md lg:text-h1lg font-extrabold leading-normal font-raleway">
                        BENEFITS OF LTL SERVICE
                    </h1>
                    <h4 className="mt-2 text-5xl font-extrabold text-white sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway ">Why Choose LTL Service with J&Harry Express ?</h4>
                    <p className="md:max-w-[70%] mt-4 text-white font-gotham" >LTL Service offers several key advantages for businesses looking to ship smaller loads efficiently, securely, and affordably. Here are some of the benefits of choosing our LTL services:</p>
                </div>
                <div className="">
                    <Slider {...settings}>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[450px] sm:min-h-[580px] md:min-h-[350px] lg:min-h-[330px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">1. Cost Savings</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    LTL Service allows you to share space on a truck with other shippers, which reduces the cost of transportation. Rather than paying for an entire truck (as you would with Full Truckload or FTL), you only pay for the space your freight occupies. This makes LTL a more budget-friendly option for smaller shipments.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[450px] sm:min-h-[580px] md:min-h-[350px] lg:min-h-[330px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">2. Flexible Shipping Options</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    LTL service is incredibly flexible. It’s ideal for businesses that ship freight on a regular basis but don’t always have a full truckload to send. With LTL, you can ship a wide range of goods—whether it’s a small pallet or a larger, heavier load—and adjust your Service needs as your business grows.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[450px] sm:min-h-[580px] md:min-h-[350px] lg:min-h-[330px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">3. Faster Delivery Times</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    While LTL shipments may take a bit longer than Full Truckload (FTL) shipments due to multiple stops, our efficient routing and optimized delivery schedules ensure that your goods arrive on time. Additionally, we offer expedited LTL options if you need your shipment to arrive faster.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[450px] sm:min-h-[580px] md:min-h-[350px] lg:min-h-[330px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">4. Environmentally Friendly</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    By consolidating shipments from multiple customers into one truck, LTL service helps reduce the carbon footprint of transportation. Fewer trucks on the road means fewer emissions and a more sustainable Service solution for your business.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[450px] sm:min-h-[580px] md:min-h-[350px] lg:min-h-[330px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">5. Increased Security and Tracking</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    With LTL service, your goods are tracked every step of the way. You’ll receive real-time updates, and we ensure that your freight is securely handled at every transfer point. Our advanced tracking system provides visibility into the status of your shipment, ensuring that you’re never in the dark about where your freight is.
                                </p>
                            </div>
                        </div>
                        <div className="bg-transparent px-5">
                            <div className="bg-white p-8 rounded-md hover:bg-[url('https://deltaexpressinc.com/wp-content/uploads/2023/01/truck-card.png')] bg-center bg-cover bg-no-repeat min-h-[450px] sm:min-h-[580px] md:min-h-[350px] lg:min-h-[330px]">
                                <h4 className="text-4xl font-semibold text-customPrimaryBlack font-ralway">6. Wide Service Coverage</h4>
                                <br />
                                <p className="text-customSecondaryBlack leading-normal font-gotham">
                                    LTL shipments can be delivered across town, across the state, or across the country. Whether you’re shipping locally or nationwide, J&Harry Express Trucking offers extensive coverage to get your goods where they need to go.
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
            <section className="p-8 md:p-20 bg-[#f6f6f6]">
                <div className="pb-6 md:pb-10">
                    <h1 className="text-customSecondaryBlack text-h1sm md:text-h1md lg:text-h1lg font-extrabold leading-normal font-raleway">
                        TYPES OF GOODS
                    </h1>
                    <h4 className="mt-2 text-5xl font-extrabold text-customSecondaryBlack sm:max-w-[70%] md:max-w-[70%] leading-normal font-ralway ">That Are Perfect for LTL Service</h4>
                    <p className="md:max-w-[70%] mt-4 text-customSecondaryBlack font-gotham" >LTL service is perfect for a wide range of goods that don’t require an entire truckload. Common items shipped via LTL include:</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    <div className="bg-white p-8 rounded-md hover:shadow-xl transition-all shadow-2xl flex flex-col min-h-[200px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><IoLocation size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">Retail Products</h4>
                        </div>
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            Clothing, electronics, furniture, and other retail products can be efficiently shipped through LTL to reach various distribution points.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-md hover:shadow-xl transition-all shadow-2xl flex flex-col min-h-[200px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><RiTruckFill size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">Industrial Parts & Equipment</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            Manufacturers and construction companies can use LTL to ship machinery parts, tools, and other industrial goods.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-md transition-all shadow-2xl flex flex-col min-h-[200px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><PiTruckFill size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">Furniture and Home Goods</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            For home goods suppliers or retailers, LTL  is an excellent choice for moving smaller quantities of furniture, decor, and household products.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-md bg-[#ffffff] transition-all shadow-2xl flex flex-col min-h-[200px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><TbUrgent size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">Consumer Electronics</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            Electronics manufacturers and distributors rely on LTL services to move items like TVs, computers, and accessories.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-md bg-[#ffffff] transition-all shadow-2xl flex flex-col min-h-[200px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><IoLocation size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">Consumer Goods</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            Anything from packaged foods to pharmaceuticals and beauty products can be shipped safely using our LTL services.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-md bg-[#ffffff] transition-all shadow-2xl flex flex-col min-h-[200px]">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-customPrimaryColor"><IoLocation size={25} color="white" /></div>
                            <h4 className="text-4xl font-semibold text-customPrimaryBlack font-raleway">Seasonal Goods</h4>
                        </div>
                        <br />
                        <p className="mt-4 text-customSecondaryBlack leading-normal font-gotham flex-1">
                            Seasonal shipments, like holiday decorations or promotional items, can be easily moved with LTL services to align with inventory needs.
                        </p>
                    </div>
                </div>
            </section>
            <section className="flex md:p-20 flex-col-reverse md:flex-row bg-customPrimaryColor">
                <div className="p-6 md:w-[60%]">
                    <h2 className="text-h1sm md:text-h1md lg:text-h1lg font-bold text-white font-ralway">GET A QUOTE<br className="lg:hidden" /> FOR LTL <br />SHIPPING</h2>
                    <p className="text-lg my-5 text-white mt-4 font-gotham" >Please fill out the form and one of our experts will contact you as soon as possible.</p>
                    <button className="text-lg text-white bg-btnColor px-10 py-3 rounded-md font-gotham">Request a quote</button>
                </div>
                <div className="md:w-[40%]">
                    <img className="w-[100%]" src={WhiteTruck} alt="truck-image" />
                </div>
            </section>
        </>
    )
}

export default LTLFrieght;