import { Card, Image, CardFooter, Divider } from "@nextui-org/react";
import herocard from "@/assets/Pics/herocard.webp";

const WorkItem = ({ name = "Project Name", desc = "description" }) => {
  return (
    <Card isFooterBlurred className="border-none size-28 md:size-52">
      <Image
        isBlurred
        alt="Woman listing to music"
        className="object-cover"
        src={herocard}
      />

      <CardFooter className="flex flex-col before:bg-white/10 border-white/20 overflow-hidden py-1 absolute bottom-0 shadow-xl z-10">
        <p className="font-bold text-xsm md:text-base">{name}</p>
        <p className="font-medium text-[6px] text-center md:text-sm">{desc}</p>
      </CardFooter>
    </Card>
  );
};

export default WorkItem;
