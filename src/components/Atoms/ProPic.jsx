import { Card, Image } from "@nextui-org/react";
import avatar from "../../../public/avatar.svg";
import MyChip from "./MyChip";

const ProPic = () => {
  return (
    <div className="flex flex-col items-center">
      <Card className="w-[84px] h-[84px] md:w-[138px] md:h-[134px]" radius="md">
        <Image
          isBlurred
          alt="Lorelei avatar from dicebear.com"
          src={avatar}
          className="w-[84px] h-[84px] md:scale-[1.6] md:ml-6 md:mt-8"
        />
      </Card>

      <MyChip text="Open to Work"></MyChip>
    </div>
  );
};

export default ProPic;
