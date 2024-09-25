import { CardHeader } from "@nextui-org/react";
import { MyCard } from "../common/MyCard";
import { Button } from "@nextui-org/react";

const Services = ({onOpen}) => {
  return (
    <MyCard color="zinc" className="w-full bg-direction bg-cover h-[205px]">
      <Button
      className="relative w-[90%]  h-16 scale-[1.2] bg-direction bg-cover font-semibold p-0 md:scale-[1] md:h-full md:w-full transition ease-in-out ring-[1px] ring-zinc-900 hover:ring-zinc-700"
      onPress={onOpen}
    >
      

      <CardHeader className="px-0 py-0 mt-4 justify-center text-xl font-semibold md:text-2xl">
        Experience
      </CardHeader>
    </Button>
    </MyCard>
  );
};

export default Services;
