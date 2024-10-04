import { ReactNode } from "react";
import Navbar from "./navbar";

interface SideBarProps {
  children: ReactNode;
}

export default function SideBar({ children }: SideBarProps) {
  return (
    <div className="flex h-full gap-3">
      <div className="hidden h-full w-[70px] flex-col items-center gap-y-2 overflow-auto rounded-lg bg-neutral-950 p-2 shadow-sm md:flex">
        <Navbar className="size-[50px]" side="right" sideOffset={11} />
      </div>
      <main className="relative h-[calc(100%-80px)] flex-1 overflow-y-auto rounded-lg bg-neutral-950 p-2 shadow-sm md:h-full">
        {children}
      </main>

      <div className="fixed bottom-0 left-0 flex h-[80px] w-full items-center justify-start gap-x-3 overflow-auto bg-neutral-950 p-2 shadow-sm md:hidden">
        <Navbar
          className="min-h-[50px] min-w-[50px]"
          side="top"
          sideOffset={11}
        />
      </div>
    </div>
  );
}
