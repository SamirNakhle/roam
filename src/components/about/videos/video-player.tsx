"use client";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export const VideoPlayer = (props: { title: string; id: string }) => {
  return <LiteYouTubeEmbed {...props} />;
};
