"use client";

import { Home, MessageCircleQuestion } from "lucide-react";
import { usePathname } from "next/navigation";

import { Separator } from "@/components/ui/separator";

import { SidebarItem } from "./sidebar-item";

export const SidebarRoutes = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-y-4 flex-1">
      <ul className="flex flex-col gap-y-1 px-3">
        <SidebarItem
          href="/"
          icon={Home}
          label="首页"
          isActive={pathname === "/"}
        />
      </ul>
      <div className="px-3">
        <Separator />
      </div>
      <ul className="flex flex-col gap-y-1 px-3">
        <SidebarItem
          href="https://github.com/zczhao1992/next-image-editor"
          icon={MessageCircleQuestion}
          label="Github"
        />
      </ul>
    </div>
  );
};
