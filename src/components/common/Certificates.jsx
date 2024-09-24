import { useState } from 'react';
import { MyCard } from './MyCard';

const Certificates = (props) => {

  return (
    <>
      <button onClick={props?.onCerOpen} className="w-full h-full">
        <MyCard
          color="zinc"
          className="p-1 w-full h-[88px] flex flex-col items-center md:h-full my-auto"
        >
          <div className="text-white text-sm font-medium text-center leading-none md:text-2xl my-auto">
            Coding platform & certifications
          </div>
        </MyCard>
      </button>

      
    </>
  );
};

export default Certificates;
