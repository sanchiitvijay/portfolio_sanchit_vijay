import { MyButton } from "../common/MyButton";

const Cta = () => {
  return (
    <div className="flex gap-4 sm:-mt-2 md:mt-0">
      <MyButton
        color="monoButtonGreen"
        className="text-sm break-words md:text-[16px] w-full p-8"
        aria-label="Tagline"
      >
        Probably learning something new. <br/>ore wa monkey d luffy, <br className="md:hidden"/> kaizoku ou ni naru otoko da !!
      </MyButton>
    </div>
  );
};

export default Cta;
