// MyButton.tsx
import { extendVariants, Button } from "@nextui-org/react";

export const MyButton = extendVariants(Button, {
  variants: {
    color: {
      navButton: "bg-[#99d52a] text-[#11181C]",
      monoButtonBlue: "bg-[#00254D] text-[#0091FF]",
      monoButtonGreen: "bg-[#153226] text-[#30A46C]",
      violetCTA: "bg-[#644FC1] text-[#fff]",
      cardFooter: "text-white bg-black/0",
    },

    size: {
      sm: "px-3 w-[87px] h-[40px] text-sm gap-4 rounded-[10px]",
      monosm:
        "px-1 size-[10.6rem] text-[12px] rounded-[8px] font-bold flex justify-center items-center gap-1 md:text-xl md:w-full md:h-[56px] md:rounded-[16px]",
      base: "px-3 py-2 w-[87px] h-[40px] text-sm gap-4 rounded-[10px] font-bold justify-center items-center gap-1 inline-flex",
      service: "p-1 w-[164px] h-10 text-base font-bold rounded-xl",
    },

    variant: {
      ghost: "bg-transparent border",
    },
  },
  compoundVariants: [
    {
      variant: "ghost",
      class: "text-[#fff] border-[#99d52a]",
    },
  ],
});
