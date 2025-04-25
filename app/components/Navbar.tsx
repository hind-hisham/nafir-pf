"use client"
import * as React from "react"
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useSession } from "next-auth/react";

// import useAuthContext from "../hooks/authprovider";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Mentorships",
    href: "/mentorshipspage",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
   
  },
  {
    title: "Activites",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "CV Services",
    href: "/docs/primitives/progress",
    description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export default function Navbar() {
  const { data: user } = useSession();
console.log("current user", user);
  return (
    <div className="flex items-center justify-between px-8 py-4 border-b bg-white shadow-sm">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/nafir.svg" alt="logo" width={120} height={40} />
      </Link>

      <NavigationMenu>
        <NavigationMenuList className="flex gap-6">
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className="font-medium text-sm">Home</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className="font-medium text-sm">About</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-medium text-sm">Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[500px] gap-4 p-4 md:grid-cols-2">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className="font-medium text-sm">Contact</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-2">
            <Image
              src={user?.user?.image}
              alt={user?.user?.name}
              width={40}
              height={40}
              className="rounded-full object-cover"
              unoptimized
            />
          </div>
        ) : (
          <>
            <Link href="/login" className="px-5 py-2 rounded-md bg-primary text-white text-sm">
              Login
            </Link>
            <Link href="/signup" className="px-5 py-2 rounded-md bg-secondary text-sm">
              Signup
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
