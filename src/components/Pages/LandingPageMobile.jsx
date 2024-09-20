import { useState } from "react";
import NavBar from "../Molecules/NavBar";
import { Route, Routes } from "react-router-dom";
import HomeMobile from "./HomeMobile";
import WorksMobile from "./WorksMobile";
import ServiceMobile from "./ServiceMobile";

const LandingPageMobile = () => {
  const [nav, setNav] = useState("Home");

  return (
    <div className="absolute left-0 right-0 top-0 container mx-auto w-[390px] py-4 md:hidden">
      <div className=" flex flex-col justify-center items-center gap-6">
        <NavBar clicked={nav} setClicked={setNav} />
        <Routes>
          <Route path="/" element={<HomeMobile />} />
          <Route path="/works" element={<WorksMobile />} />
          <Route path="/services" element={<ServiceMobile />} />
        </Routes>
      </div>
    </div>
  );
};

export default LandingPageMobile;
