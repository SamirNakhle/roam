import { Bell, Phone, Ribbon, Triangle } from "lucide-react";

export const PhoneIcon = () => <Phone width="1em" height="1em" />;
export const RibbonIcon = () => <Ribbon width="1em" height="1em" />;
export const Triangle1Icon = () => <Triangle width="1em" height="1em" />;
export const Triangle2Icon = () => (
  <Triangle
    width="1em"
    height="1em"
    style={{
      transform: "rotate(180deg)",
    }}
  />
);

export const BellIcon = () => <Bell width="1em" height="1em" />;
