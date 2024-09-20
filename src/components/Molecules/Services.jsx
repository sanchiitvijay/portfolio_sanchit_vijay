import { CardHeader } from "@nextui-org/react";
import { MyCard } from "../Atoms/MyCard";

const Services = () => {
  return (
    <MyCard color="zinc" className="w-full h-[242px]">
      <CardHeader className="px-0 py-0 mt-4 justify-center text-xl font-semibold md:text-2xl">
        Services
      </CardHeader>
    </MyCard>
  );
};

export default Services;
