import { useFormik } from "formik";
import * as Yup from "yup";
import RedBg from "../assets/redbg.jpg"

const validationSchama = Yup.object({
    name: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name cannot be more than 50 characters')
        .required('Name is required'),

    lastname: Yup.string()
        .min(2, 'Last name must be at least 2 characters')
        .max(50, 'Last name cannot be more than 50 characters')
        .required('Last name is required'),

    email: Yup.string()
        .matches(
            /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
            'Invalid email address'
        )
        .required('Email is required'),

    phone: Yup.string()
        .matches(
            /^\+?[1-9]\d{1,14}$/,
            'Phone number is not valid. Please use international format (e.g., +123456789)'
        )
        .required('Phone number is required'),
})

const Contact = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: "",
            lastname: ""
        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: validationSchama,
        onSubmit: (values) => {

        }
    });

    return (
        <>
            <section className="p-20 h-[500px] bg-customPrimaryColor" >
                <p className="text-customSecondaryBlack text-lg ">Home <span className="text-customWhiteColor font-gotham">/ Contact Us</span></p>
                <h1 className="pt-8 text-customWhiteColor font-extrabold text-h1sm md:text-h1md lg:text-h1lg leading-normal font-ralway">CONTACT US</h1>
            </section>
            <section className="relative h-[1100px] md:h-[700px] lg:[650px] bg-[#f6f6f6]">
                <div className="absolute bg-white p-6 md:p-10 w-[90%] sm:w-[80%] md:w-[70%] left-[50%] translate-x-[-50%] rounded-2xl top-[-200px] md:top-[-250px] h-[1250px] md:h-[820px] lg:[780px] shadow">
                    <h1 className="text-center font-extrabold text-h1sm md:text-h1md lg:text-h1lg leading-normal text-customPrimaryBlack font-ralway">REQUEST A QUOTE</h1>
                    <p className="text-center leading-normal text-md text-[#c1c1c1] font-gotham">Please fill out the form and one of our experts will contact you as soon as possible.</p>
                    <div className="m-8">
                        <form className="flex flex-col gap-10" onSubmit={formik.handleSubmit}>
                            <div className="flex flex-col md:flex-row gap-10">
                                <div className="md:w-[50%]">
                                    <label className="text-customPrimaryColor font-gotham">Name</label><br />
                                    <input
                                        className={`border ${formik.errors.name && formik.touched.name ? "border-red-600" : "#b8b8b8"} bg-[#fff] w-[100%] px-4 py-3 rounded-md mt-2 outline-none font-gotham`}
                                        placeholder="Enter Your Name"
                                        name="name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.name && formik.touched.name && (
                                        <span className="error text-red-600 text-sm">{formik.errors.name}</span>
                                    )}
                                </div>
                                <div className="md:w-[50%]">
                                    <label className="text-customPrimaryColor font-gotham">Last name</label><br />
                                    <input
                                        className={`border ${formik.errors.lastname && formik.touched.lastname ? "border-red-600" : "#b8b8b8"} bg-[#fff] font-gotham w-[100%] px-4 py-3 rounded-md mt-2 outline-none`}
                                        placeholder="Enter Your Last Name"
                                        name="lastname"
                                        value={formik.values.lastname}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.lastname && formik.touched.lastname && (
                                        <span className="error text-red-600 text-sm">{formik.errors.lastname}</span>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-10">
                                <div className="md:w-[50%]">
                                    <label className="text-customPrimaryColor font-gotham">E-mail</label><br />
                                    <input
                                        className={`border ${formik.errors.email && formik.touched.email ? "border-red-600" : "#b8b8b8"} font-gotham bg-[#fff] w-[100%] px-4 py-3 rounded-md mt-2 outline-none`}
                                        placeholder="Enter Your E-mail"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.email && formik.touched.email && (
                                        <span className="error text-red-600 text-sm">{formik.errors.email}</span>
                                    )}
                                </div>
                                <div className="md:w-[50%]">
                                    <label className="text-customPrimaryColor font-gotham">Phone</label><br />
                                    <input
                                        className={`border ${formik.errors.phone && formik.touched.phone ? "border-red-600" : "#b8b8b8"} font-gotham bg-[#fff] w-[100%] px-4 py-3 rounded-md mt-2 outline-none`}
                                        placeholder="Enter Your Phone"
                                        name="phone"
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.phone && formik.touched.phone && (
                                        <span className="error text-red-600 text-sm">{formik.errors.phone}</span>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label className="text-customPrimaryColor font-gotham">Message</label><br />
                                <textarea
                                    className="border border-[#B8B8B8] bg-[#fff] w-[100%] px-4 py-3 rounded-md mt-2 font-gotham focus:ring-0 outline-none resize-none"
                                    placeholder="Enter your Message"
                                    rows={4}
                                />
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label className="text-[#c1c1c1] text-sm ms-2 font-gotham">You read and agree to our <span className="text-customPrimaryColor">Privacy Policy.</span></label><br />
                                <input type="checkbox" />
                                <label className="text-[#c1c1c1] text-sm ms-2 font-gotham">By checking this box, you agree to receive text messages from DeltaExpress Inc. You can reply “STOP” to opt-out at any time. Our <span className="text-customPrimaryColor">Privacy Policy.</span></label>
                            </div>
                            <div>
                                <button type="submit" className="text-lg text-white bg-btnColor px-10 py-3 rounded-md font-gotham">Request a Quote</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* <section className="pb-10 bg-[#f6f6f6]">
                <div className="flex flex-wrap gap-10 p-20 justify-around">
                    <button className="text-lg text-white bg-customSecondaryColor hover:bg-customPrimaryColor px-16 py-4 py-3 rounded-md min-w-[300px] font-gotham">Headquarter Office</button>
                    <button className="text-lg text-white bg-customSecondaryColor hover:bg-customPrimaryColor px-16 py-4 py-3 rounded-md min-w-[300px] font-gotham">Branch in Mexico</button>
                    <button className="text-lg text-white bg-customSecondaryColor hover:bg-customPrimaryColor px-16 py-4 py-3 rounded-md min-w-[300px] font-gotham">Branch in Deutschland</button>
                    <button className="text-lg text-white bg-customSecondaryColor hover:bg-customPrimaryColor px-16 py-4 py-3 rounded-md min-w-[300px] font-gotham">Branch in Poland</button>
                </div>
                <div className="xl:mx-20 flex flex-wrap  gap-10 justify-center" >
                    <div className="bg-white shadow w-[90%] md:w-[45%] xl:w-[30%] rounded-lg">
                        <p className="text-customPrimaryColor p-4 font-bold text-3xl font-gotham">Phone</p>
                        <div className="flex flex-col p-4 gap-4">
                            <div className="flex gap-10">
                                <div className="w-[50%] text-customSecondaryBlack text-start text-[18px] font-gotham">
                                    704-288-3119
                                </div>
                                <div className="w-[50%] text-start text-[18px] text-customPrimaryColor font-gotham">
                                    Truckload dept.
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="w-[50%] text-customSecondaryBlack text-start text-[18px] font-gotham">
                                    704-869-2830
                                </div>
                                <div className="w-[50%] text-start text-[18px] text-customPrimaryColor font-gotham">
                                    Expedite dept.
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="w-[50%] text-customSecondaryBlack text-start text-[18px] font-gotham">
                                    866-866-8803
                                </div>
                                <div className="w-[50%] text-start text-[18px] text-customPrimaryColor font-gotham">
                                    Truckload recruiting
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="w-[50%] text-customSecondaryBlack text-start text-[18px] font-gotham">
                                    360-524-6512
                                </div>
                                <div className="w-[50%] text-start text-[18px] text-customPrimaryColor font-gotham">
                                    Obc dept.
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="w-[50%] text-customSecondaryBlack text-start text-[18px] font-gotham">
                                    864-900-5564
                                </div>
                                <div className="w-[50%] text-start text-[18px] text-customPrimaryColor font-gotham">
                                    Global Forwarding (Main Line)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow w-[90%] md:w-[45%] xl:w-[30%] rounded-lg">
                        <p className="text-customPrimaryColor p-4 text-lg font-semibold font-ralway">E-mail</p>
                        <div className="flex flex-col p-4 gap-4">
                            <div className="flex gap-10">
                                <div className="w-[100%] text-customSecondaryBlack text-start text-[18px] break-words font-gotham">
                                    truckload@deltaexpressinc.com
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="w-[100%] text-customSecondaryBlack text-start  text-[18px] font-gotham">
                                    expeditedeliveries@deltaexpressinc.com
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="w-[100%] text-customSecondaryBlack text-start  text-[18px] font-gotham">
                                    hr@deltaexpressinc.com
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="w-[100%] text-customSecondaryBlack text-start  text-[18px] font-gotham">
                                    obc@deltaexpressinc.com
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="w-[100%] text-customSecondaryBlack text-start  text-[18px] font-gotham">
                                    globalforwarding@deltaexpressinc.com
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow w-[90%] md:w-[45%] xl:w-[30%] rounded-lg">
                        <p className="text-customPrimaryColor p-4 text-lg font-semibold font-ralway">Address</p>
                        <div className="flex flex-col p-4 gap-4">
                            <div className="flex gap-10">
                                <div className="w-[100%] text-start text-customSecondaryBlack text-[18px] font-gotham">
                                    603 Canterbury Rd,<br />
                                    Kings Mountain, NC 28086
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <section className="bg-[#f6f6f6] relative pt-[150px] md:pt-[0px] lg:pt-[250px]">
                <div className="bg-customPrimaryColor py-20 px-20">
                    <h2 className="text-h1sm md:text-h1md lg:text-h1lg font-bold text-white font-ralway">ASK US</h2>
                    <p className="text-lg my-5 text-white mt-4 max-w-[350px] font-gotham" >Please fill out the form and one of our experts will contact you as soon as possible.</p>
                    <button className="text-lg text-white bg-customPrimaryBlack px-10 py-3 rounded-md font-gotham">Request a quote</button>
                </div>
                <div className="absolute bottom-[55%] right-[50%] translate-x-[50%] md:translate-x-[0%] md:right-[40px] md:bottom-[30px]" >
                    <img className="md:w-[400px] lg:w-[700px]" src="https://deltaexpressinc.com/wp-content/uploads/2023/01/ask-images.png" alt="truck-image" />
                </div>
            </section> */}
        </>
    )
}

export default Contact;