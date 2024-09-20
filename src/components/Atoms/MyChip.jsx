import AnimatedShinyText from "../magicui/animated-shiny-text";

const MyChip = ({ variant = "primary", text, emoji = "💻" }) => {
  const baseClasses = "rounded-[8px] text-[8px] ";
  const variantClasses = {
    primary:
      "border border-white/5 text-white bg-black z-10 -mt-2 md:w-[116px] md:h-[28px] md:text-xsm md:text-center",
    secondary:
      "border border-white/5 text-white bg-text-zinc-950 w-fit md:h-[28px] md:text-sm md:text-center md:rounded-[12px]",
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      <AnimatedShinyText className="inline-flex items-center justify-center px-1 py-1">
        <span className="font-medium">
          {emoji} {text}
        </span>
      </AnimatedShinyText>
    </div>
  );
};

export default MyChip;
