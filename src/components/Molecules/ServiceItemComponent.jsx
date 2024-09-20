import { MyCard } from "../Atoms/MyCard";
import { MyButton } from "../Atoms/MyButton";

const ServiceItemComponent = ({
  header = "Web Development 🧑🏽‍💻",
  description = "Lorem ipsum dolor sit amet consectetur. Convallis morbi vitae malesuada consequat sit vestibulum. Sodales magna sed et erat est.",
}) => {
  return (
    <MyCard color="zinc" className=" w-[108%] p-4">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-2xl">{header}</h1>
        <p className="text-sm text-zinc-400">{description}</p>
        <MyButton color="monoButtonGreen" className="font-bold">
          Let's connect
        </MyButton>
      </div>
    </MyCard>
  );
};

export default ServiceItemComponent;
