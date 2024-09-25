import { Route, Routes } from "react-router-dom";
import HomeMobile from "./HomeMobile";

const LandingPageMobile = () => {

  return (
    <div className="absolute left-0 right-0 top-0 container mx-auto w-full  py-8 md:hidden">
      <div className=" flex flex-col justify-center items-center gap-6">
     
        <Routes>
          <Route path="/" element={<HomeMobile />} />
        </Routes>
      </div>
    </div>
  );
};

export default LandingPageMobile;
