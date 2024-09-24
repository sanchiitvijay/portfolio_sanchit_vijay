import { useState, useEffect } from 'react';
import { MyCard } from '../common/MyCard';
import NumberTicker from '../magicui/number-ticker';

// const Time = () => {
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000); // Update time every second

//     return () => clearInterval(timer); // Cleanup on component unmount
//   }, []);

//   const formattedTime = currentTime.toLocaleTimeString();
//   const formattedDate = currentTime.toLocaleDateString(); 

//   return (
//     <MyCard color="zinc" className="p-1 w-full h-[88px] flex flex-col items-center md:h-full">
//       <div className="text-4xl font-bold text-[#99D52A] text-center tracking-tighter md:text-6xl">
//         <NumberTicker value={formattedTime} stiffVal={100} />
//       </div>
//       <div className="-mt-2 text-white text-sm font-medium text-center leading-none md:text-xl md:-mt-4">
//         {formattedDate}
//       </div>
//     </MyCard>
//   );
// };

// export default Time;


const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const formattedDate = time.toLocaleDateString("en-US", {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <MyCard color="zinc" className="p-1 w-full h-[88px] flex flex-col items-center md:h-full">
      <div className="text-md font-bold text-[#99D52A] text-center tracking-tighter md:text-xl mt-3">
        <div>{formattedTime}</div><br/>
      </div>
      <div className="text-white text-sm font-medium text-center leading-none md:text-md mt-[-20px]">
        {formattedDate}
      </div>
    </MyCard>
  );
};

export default Time;
