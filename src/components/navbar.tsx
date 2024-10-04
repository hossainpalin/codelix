"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Hint from "./hint";

interface NavbarProps {
  className?: string;
  side?: "left" | "right" | "top" | "bottom";
  sideOffset?: number;
}

export default function Navbar({ className, side, sideOffset }: NavbarProps) {
  const pathname = usePathname();

  const routes = useMemo(() => {
    return [
      {
        label: "Python Complier",
        icon: "/icons/icon.svg",
        active: pathname === "/python",
        href: "/python",
      },
      {
        label: "R Complier",
        icon: "/icons/icon.svg",
        active: pathname === "/r",
        href: "/r",
      },
      {
        label: "Java Complier",
        icon: "/icons/icon.svg",
        active: pathname === "/java",
        href: "/java",
      },
      {
        label: "C Complier",
        icon: "/icons/icon.svg",
        active: pathname === "/c",
        href: "/c",
      },
      {
        label: "C++ Complier",
        icon: "/icons/icon.svg",
        active: pathname === "/cpp",
        href: "/cpp",
      },
      {
        label: "C# Complier",
        icon: "/icons/icon.svg",
        active: pathname === "/csharp",
        href: "/csharp",
      },
      {
        label: "JavaScript Complier",
        icon: "/icons/icon.svg",
        active: pathname === "/javascript",
        href: "/javascript",
      },
      {
        label: "Go Complier",
        icon: "/icons/icon.svg",
        active: pathname === "/go",
        href: "/go",
      },
      {
        label: "Php Complier",
        icon: "/icons/icon.svg",
        active: pathname === "/php",
        href: "/php",
      },
      {
        label: "Swift Complier",
        icon: "/icons/icon.svg",
        active: pathname === "/swift",
        href: "/swift",
      },
      {
        label: "TypeScript Complier",
        icon: "/icons/icon.svg",
        active: pathname === "/typescript",
        href: "/typescript",
      },
      {
        label: "Rust Complier",
        icon: "/icons/icon.svg",
        active: pathname === "/rust",
        href: "/rust",
      },
    ];
  }, [pathname]);

  return (
    <>
      {routes.map((route) => (
        <Hint
          side={side}
          sideOffset={sideOffset}
          label={route.label}
          key={route.label}>
          <Link
            className={cn(
              "rounded-md border border-neutral-800 p-2 transition hover:border-teal-900",
              className,
              route.active && "border-teal-900 bg-teal-900",
              route.active && "hover:border-teal-900 hover:bg-teal-900",
            )}
            href={route.href}>
            <Image
              className="object-cover"
              src={route.icon}
              alt={route.label}
              width={100}
              height={100}
            />
          </Link>
        </Hint>
      ))}
    </>
  );
}
