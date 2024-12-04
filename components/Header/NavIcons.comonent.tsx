import Image from "next/image";
import Link from "next/link";
import IconProfile from "../Icons/profile.icon";
import IconBasket from "../Icons/basket.icon";

const NavIcons = () => {
  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <IconProfile />
      <IconBasket />
    </div>
  );
};

export default NavIcons;
