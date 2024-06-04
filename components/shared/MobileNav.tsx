
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Separator } from "../ui/separator"
  import NavItems from "./NavItems"
  
  
  const MobileNav = () => {
    return (
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <img 
              src="/assets/icons/burger-bar.png"
              alt="menu"
              width={24}
              height={24}
              className="cursor-pointer border-2 border-red-500"
            />
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
            <img 
              src="/assets/images/eventhublogo1.png"
              alt="logo"
              width={128}
              height={38}
            />
            <Separator className="border border-gray-50" />
            <NavItems />
          </SheetContent>
        </Sheet>
      </nav>
    )
  }
  
  export default MobileNav
  