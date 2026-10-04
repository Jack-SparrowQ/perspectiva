import type { Variants } from "motion/react";

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(3px)",
    y: 10,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
  },
};

export const buttonReveal: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(3px)",
    y: 6,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
  },
};
