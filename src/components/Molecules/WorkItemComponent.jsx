import { Chip, Skeleton } from "@nextui-org/react";
import { MyCard } from "../Atoms/MyCard";

const WorkItemComponent = ({ Header, Tags, Description }) => {
  return (
    <MyCard
      color="zinc"
      className=" w-[108%] space-y-5 p-4 "
      radius="lg"
    >
      <Skeleton className="rounded-lg">
        <div className="h-36 rounded-lg bg-default-300"></div>
      </Skeleton>

      <div className="flex flex-row gap-3 h-[20px]">
        {Tags.map((tag, index) => (
          <Chip key={index}>{tag}</Chip>
        ))}
      </div>

      <div className="flex flex-col">
        <h1 className="font-bold text-2xl">{Header}</h1>
        <h2 className="text-sm text-zinc-400">{Description}</h2>
      </div>
    </MyCard>
  );
};

export default WorkItemComponent;
