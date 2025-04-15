import { IconType } from "react-icons";
import CustomLink from "../link/CustomLink";

type ItemMenuProps = {
  href: string;
  label: string;
  icon: IconType
}

export default function ItemMenu({ label, icon: Icon, href } : ItemMenuProps) {
  return (
    <CustomLink
    href={href}
    className="flex flex-row items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded"
  >
    <Icon className="w-5 h-5"/>
    <span
      className="font-henderson-semi-bold text-black"
    >{label}</span>
  </CustomLink>
  )
}