import React from "react";

export type PlaceholderImgProps = {
  /** Absolute or public-relative path (e.g. /images/hero-1200x600.webp) */
  src: string;
  /** Natural width/height for layout stability */
  width: number;
  height: number;
  /** Decorative images should pass alt="" */
  alt?: string;
  className?: string;
  loading?: "eager" | "lazy";
  decoding?: "async" | "sync" | "auto";
};

/**
 * Image helper that enforces explicit dimensions and avoids SVG.
 * Use with files you will replace later.
 */
export const PlaceholderImg: React.FC<PlaceholderImgProps> = ({
  src,
  width,
  height,
  alt = "",
  className,
  loading = "lazy",
  decoding = "async",
}) => {
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt}
      loading={loading}
      decoding={decoding}
      className={className}
    />
  );
};
