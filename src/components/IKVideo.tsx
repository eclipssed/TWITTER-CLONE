"use client";
import { Video } from "@imagekit/next";

type VideoTypes = {
  src: string;
  className?: string;
};

const IKVideo = ({ src, className }: VideoTypes) => {
  return (
    <Video
      src={src}
      className={className}
      transformation={[{ width: "1920", height: "1080", quality: 90 }]}
      controls
    />
  );
};

export default IKVideo;
