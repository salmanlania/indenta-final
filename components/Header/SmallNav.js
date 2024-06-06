import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import SmallNavItem from "../../data/header.json";

const SmallNav = () => {
  const pathname = usePathname();

  const isActive = (href) => pathname.startsWith(href);
  return (
    <>

    </>
  );
};

export default SmallNav;
