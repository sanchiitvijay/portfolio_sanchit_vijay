import { Card, extendVariants } from "@nextui-org/react";

export const MyCard = extendVariants(Card, {
  variants: {
    color: {
      zinc: "bg-zinc-950  ring-[1px] ring-zinc-900",
    },
  },
});
