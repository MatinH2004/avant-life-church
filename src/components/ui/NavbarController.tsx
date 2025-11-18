"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/ui/Navbar";

export default function NavbarController() {
  const pathname = usePathname();

  const showOnScrollRoutes = [
    "/", 
    "/northshore", 
    "/squamish", 
    "/toronto"
  ];

  return showOnScrollRoutes.includes(pathname) 
         ? <Navbar showOnScroll /> 
         : <Navbar />;
}
