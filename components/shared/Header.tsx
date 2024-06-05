import { SignedIn, SignedOut,UserButton,} from "@clerk/nextjs"
// import { UserButton } from '@clerk/clerk-react';
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <img
            src="/assets/images/eventhublogo1.png" width={100} height={8}
            alt="Evently logo" 
          />
        </Link>
  
        <SignedIn>
               {/* hidden on mobile device, show on normal screen*/}
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
      
        </SignedIn>
     
        

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
          <UserButton/>
          
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header