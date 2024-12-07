import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../Layout/Layout";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import LTLFrieght from "../pages/LTLFrieght";
import Expedited from "../pages/Expedited";
import CrossBorderShipping from "../pages/CrossBorderShipping";
import Reefer from "../pages/Reefer";
import FullTruckLoadShipping from "../pages/FullTruckloadShipping";

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/for-owner-operators" element={<Layout><Home /></Layout>} />
                <Route path="/" element={<Layout><Dashboard /></Layout>} />
                <Route path="/about" element={<Layout><About /></Layout>} />
                <Route path="/contact" element={<Layout><Contact /></Layout>} />
                <Route path="/ltl-frieght" element={<Layout><LTLFrieght /></Layout>} />
                <Route path="/expedited" element={<Layout><Expedited /></Layout>} />
                <Route path="/reefer" element={<Layout><Reefer /></Layout>} />
                <Route path="/ftl" element={<Layout><FullTruckLoadShipping /></Layout>} />
                <Route path="/cross-border-shipping" element={<Layout><CrossBorderShipping /></Layout>} />
            </Routes>
        </>
    )
}

export default AllRoutes;