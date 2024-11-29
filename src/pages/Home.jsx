import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row">
                <div className="px-6 lg:px-20 py-12 lg:w-[60%]">
                    <p className="text-customPrimaryColor text-lg font-normal">Home <span className="text-customPrimaryBlack">/ For Owner Operators</span></p>
                    <h1 className="font-extrabold text-5xl text-customPrimaryBlack mt-8 lg:max-w-[450px] leading-normal font-ralway">FOR OWNER OPERATORS</h1>
                    <h4 className="mt-8 text-customSecondaryColor text-xl font-bold lg:max-w-[510px] font-ralway">Owner Operators take home 90% of total load gross!<br />
                        No hidden fees!</h4>
                    <p className="mt-4 text-md text-customPrimaryBlack lg:max-w-[480px]">We have a wide range of services that include reefer and dry van with no forced dispatch!</p>
                    <h3 className="mt-4 text-2xl font-bold lg:max-w-[450px] font-ralway">Be #1 by receiving top pay in the industry!</h3>
                </div>
                <div className="lg:ps-20 lg:pt-20">
                    <div className="lg:rounded-tl-2xl overflow-hidden object-cover">
                        <img className="lg:min-h-[500px]" src="https://deltaexpressinc.com/wp-content/uploads/2023/01/operator.png" alt="home-banner" />
                    </div>
                </div>
            </div>
            <div className="py-10 lg:px-20 flex flex-col-reverse lg:flex-row gap-10">
                <div className="lg:w-[45%] flex justify-center lg:justify-start">
                    <img className="w-100" src="https://deltaexpressinc.com/wp-content/uploads/2023/01/dont-take-single-dime-less-than-you-deserve.png" alt="home-page-banner" />
                </div>
                <div className="lg:w-[55%] px-6">
                    <h2 className="text-5xl font-extrabold leading-normal text-customSecondaryBlack">DON’T TAKE A SINGLE DIME LESS THAN YOU DESERVE!</h2>
                    <div>
                        <ul className="list-disc pl-5 space-y-2 mt-6 custom-bullet">
                            <li>Plate Program</li>
                            <li>Trailer availability (Excluding Flatbed and Stepdeck)</li>
                            <li>Professional Dispatcher</li>
                            <li>24/7 Roadside service team</li>
                            <li>100% Fuel Advance</li>
                            <li>Referral and Safety Bonus</li>
                            <li>Operations in the full 48 states and parts of Canada</li>
                            <li>Full 28 Truck and Trailer Shop</li>
                        </ul>
                    </div>
                    <p className="mt-6 font-bold text-3xl text-customPrimaryColor">866-866-8803</p>
                    <button className="bg-customPrimaryBlack text-white px-16 py-2 mt-5 rounded-md font-semibold">Call Now</button>
                </div>
            </div>
            <div className="relative pt-[150px] md:pt-[0px] lg:pt-[250px]">
                <div className="bg-customPrimaryColor py-20 px-20">
                    <h2 className="text-5xl font-bold text-white font-ralway">ASK US</h2>
                    <p className="text-lg my-5 text-white mt-4 max-w-[350px]" >Please fill out the form and one of our experts will contact you as soon as possible.</p>
                    <Link to={"/contact"}><button className="text-lg text-white bg-customSecondaryColor px-10 py-3 rounded-md mt-10 mb-10 font-gotham">Request a Quote</button></Link>
                </div>
                <div className="absolute bottom-[55%] right-[50%] translate-x-[50%] md:translate-x-[0%] md:right-[40px] md:bottom-[30px]" >
                    <img className="md:w-[400px] lg:w-[700px]" src="https://deltaexpressinc.com/wp-content/uploads/2023/01/ask-images.png" alt="truck-image" />
                </div>
            </div>
        </>
    )
}

export default Home;