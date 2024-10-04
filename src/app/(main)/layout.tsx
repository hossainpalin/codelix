import SideBar from "@/components/sidebar";
import { ReactNode } from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="h-full">
      <SideBar>{children}</SideBar>
    </div>
  );
}
