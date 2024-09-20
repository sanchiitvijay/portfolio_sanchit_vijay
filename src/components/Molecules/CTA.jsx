import { MyButton } from "../Atoms/MyButton";

const Cta = () => {
  return (
    <div className="flex gap-4 sm:-mt-2 md:mt-0">
      {/* <MyButton
        color="monoButtonBlue"
        size="monosm"
        startContent={<Icon icon="skill-icons:linkedin" width="1em" height="1em" />}
        onClick={() =>
          window.open(
            "https://telegram.me/karkey5994",
            "_blank",
            "noopener noreferrer"
          )
        }
      >
        Telegram me
      </MyButton> */}

      <MyButton
        color="monoButtonGreen"
        // size="monosm"
        className="text-md w-full p-8"
        // startContent={
          // <Icon icon="logos:whatsapp-icon" width="1em" height="1em" />
        // }
        aria-label="Tagline"
      >
        Probably learning something new. <br/>ore wa monkey d luffy, kaizoku ou ni naru otoko da !!
      </MyButton>
    </div>
  );
};

export default Cta;
