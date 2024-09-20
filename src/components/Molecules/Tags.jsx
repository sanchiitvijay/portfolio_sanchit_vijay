import MyChip from "../Atoms/MyChip";

const Tags = () => {
  return (
    <div className="flex flex-col gap-1 -mt-2">
      <div className="flex gap-1">
        <MyChip variant="secondary" text="Bangalore,India" emoji="📍" />
        <MyChip variant="secondary" text="Software Engineer" emoji="🏢" />
        <MyChip variant="secondary" text="B.Tech,NIT Trichy" emoji="🎓" />
      </div>

      <div className="flex gap-1">
        <MyChip variant="secondary" text="Tamil & English" emoji="🗣️" />
        <MyChip variant="secondary" text="Basketball" emoji="🏀" />
      </div>
    </div>
  );
};

export default Tags;
