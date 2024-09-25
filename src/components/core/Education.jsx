import { Button } from "@nextui-org/react";
import image from "@/assets/Pics/flowers.jpg";

const Education = ({ onOpen }) => {
  return (
    <Button
      className="relative w-full h-16 bg-zinc-950 font-semibold p-0 md:h-full md:w-full transition ease-in-out ring-[1px] ring-zinc-900 hover:ring-zinc-700"
      onPress={onOpen}
    >
      <span className="absolute bottom-50 left-0 right-0 text-center z-10 text-xl md:text-2xl text-white">
        Education
      </span>
      <img
        src={image}
        alt="A Scene from Fight Club"
        className="w-[100%] h-full object-cover brightness-100  "
      />
    </Button>
  );
};

export default Education;
