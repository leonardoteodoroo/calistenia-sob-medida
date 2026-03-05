import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "text-color": [{ text: ["primary", "secondary", "muted", "inverse"] }],
      "bg-color": [
        { bg: ["background"] },
        { surface: ["section", "card", "subtle", "elevated"] },
        { primary: ["DEFAULT", "hover", "active", "disabled"] },
        { strong: ["DEFAULT", "hover", "active", "disabled"] },
      ],
      "border-color": [{ border: ["DEFAULT", "subtle", "focus"] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
