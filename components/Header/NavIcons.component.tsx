import IconProfile from "../Icons/profile.icon";
import IconBasket from "../Icons/basket.icon";

export default function NavIcons() {
  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <IconProfile />
      <IconBasket />
    </div>
  );
}
