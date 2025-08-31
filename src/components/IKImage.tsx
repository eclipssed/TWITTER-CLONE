"use client";

import { Image } from "@imagekit/next";

type ImageType = {
  src: string;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
  tr?: boolean;
};

const IKImage = ({ src, w, h, alt, className, tr }: ImageType) => {
  return (
    <Image
      src={src}
      {...(tr
        ? {
            transformation: [{ width: `${w}`, height: `${h}` }],
          }
        : { width: w, height: h })}
      width={w}
      height={h}
      alt={alt}
      className={className}
    />
  );
};

export default IKImage;
