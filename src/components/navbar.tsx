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
        icon: "/icons/python.svg",
        active: pathname === "/python",
        href: "/python",
      },
      {
        label: "R Complier",
        icon: "/icons/r.svg",
        active: pathname === "/r",
        href: "/r",
      },
      {
        label: "Java Complier",
        icon: "/icons/java.svg",
        active: pathname === "/java",
        href: "/java",
      },
      {
        label: "C Complier",
        icon: "/icons/c.svg",
        active: pathname === "/c",
        href: "/c",
      },
      {
        label: "C++ Complier",
        icon: "/icons/cplusplus.svg",
        active: pathname === "/cpp",
        href: "/cpp",
      },
      {
        label: "C# Complier",
        icon: "/icons/csharp.svg",
        active: pathname === "/csharp",
        href: "/csharp",
      },
      {
        label: "JavaScript Complier",
        icon: "/icons/javascript.svg",
        active: pathname === "/javascript",
        href: "/javascript",
      },
      {
        label: "Go Complier",
        icon: "/icons/go.svg",
        active: pathname === "/go",
        href: "/go",
      },
      {
        label: "Php Complier",
        icon: "/icons/php.svg",
        active: pathname === "/php",
        href: "/php",
      },
      {
        label: "Swift Complier",
        icon: "/icons/swift.svg",
        active: pathname === "/swift",
        href: "/swift",
      },
      {
        label: "TypeScript Complier",
        icon: "/icons/typescript.svg",
        active: pathname === "/typescript",
        href: "/typescript",
      },
      {
        label: "Rust Complier",
        icon: "/icons/rust.svg",
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
              "rounded-md border border-neutral-800 p-2 transition hover:border-green-800",
              className,
              route.active && "border-green-800 bg-green-800",
              route.active && "hover:border-green-800 hover:bg-green-800",
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
