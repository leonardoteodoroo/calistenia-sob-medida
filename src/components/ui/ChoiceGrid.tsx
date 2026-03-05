import React from "react";
import { PlaceholderImg } from "./PlaceholderImg";

export type ChoiceOption = {
  id: string;
  label: string;
  /** Optional image placeholder */
  image?: {
    src: string;
    width: number;
    height: number;
    alt?: string;
  };
};

export type ChoiceGridProps = {
  options: ChoiceOption[];
  value: string[]; // single = [id] or []
  multiple?: boolean;
  onChange: (next: string[]) => void;
  columns?: 2 | 3 | 4;
};

export const ChoiceGrid: React.FC<ChoiceGridProps> = ({
  options,
  value,
  multiple = false,
  onChange,
  columns = 2,
}) => {
  const toggle = (id: string) => {
    if (!multiple) return onChange([id]);
    const has = value.includes(id);
    const next = has ? value.filter((v) => v !== id) : [...value, id];
    onChange(next);
  };

  const gridCols =
    columns === 4
      ? "grid-cols-2 sm:grid-cols-4"
      : columns === 3
        ? "grid-cols-2 sm:grid-cols-3"
        : "grid-cols-2";

  return (
    <div className={`grid ${gridCols} gap-3`}>
      {options.map((opt) => {
        const selected = value.includes(opt.id);
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => toggle(opt.id)}
            className={`text-left rounded-2xl border p-3 transition-all bg-white hover:bg-zinc-50 ${
              selected ? "border-transparent" : "border-zinc-200"
            }`}
            style={
              selected
                ? {
                    borderColor: "#2C7A7B",
                    boxShadow: "0 0 0 2px rgba(44,122,123,0.2)",
                  }
                : undefined
            }
            aria-pressed={selected}
          >
            {opt.image && (
              <div className="mb-2 rounded-xl overflow-hidden bg-zinc-100">
                <PlaceholderImg
                  src={opt.image.src}
                  width={opt.image.width}
                  height={opt.image.height}
                  alt={opt.image.alt ?? ""}
                  className="w-full h-36 sm:h-40 object-cover"
                />
              </div>
            )}
            <div className="flex items-center gap-2">
              <span className="font-bold text-zinc-900 text-sm sm:text-base">
                {opt.label}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
};
