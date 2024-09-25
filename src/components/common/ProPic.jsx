import { Card } from "@nextui-org/react";
import avatar from "../../assets/Pics/profile.png";
import MyChip from "./MyChip";

const ProPic = () => {
  return (
    <div className="flex flex-col items-center">
      <Card className="w-[84px] h-[84px] md:w-[138px] md:h-[134px]" radius="md">
        <img alt="Sanchit Vijay" src={avatar} className="image-cover" />
      </Card>

      <MyChip text="Open to Work"></MyChip>
    </div>
  );
};

export default ProPic;
