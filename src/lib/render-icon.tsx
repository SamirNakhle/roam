import { FaXTwitter } from "react-icons/fa6";

import { Facebook } from "@/components/icons/facebook";
import { Instagram } from "@/components/icons/instagram";
import { Tiktok } from "@/components/icons/tiktok";

export const renderIcon = (platform: string) => {
  switch (platform) {
    case "facebook":
      return <Facebook />;
    case "instagram":
      return <Instagram />;
    case "x":
      return <FaXTwitter className="h-[30px] w-[30px]" />;
    case "tiktok":
      return <Tiktok />;
    default:
      return null;
  }
};
