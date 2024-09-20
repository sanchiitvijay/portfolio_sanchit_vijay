import { Button } from "@nextui-org/react";
import welcome from "@/assets/Pics/WelcomeFCx1.webp";

const WorkExperience = ({ onOpen }) => {
  return (
    <Button
      className="relative w-[90%] h-16 scale-[1.2] bg-zinc-950 font-semibold p-0 md:scale-[1] md:h-full md:w-full transition ease-in-out ring-[1px] ring-zinc-900 hover:ring-zinc-700"
      onPress={onOpen}
    >
      <span className="absolute bottom-50 left-0 right-0 text-center z-10 text-xl md:text-2xl text-white">
        Work Experience
      </span>
      <img
        src={welcome}
        alt="A Scene from Fight Club"
        className="w-[100%] h-full object-cover brightness-100  "
      />
    </Button>
  );
};

export default WorkExperience;
