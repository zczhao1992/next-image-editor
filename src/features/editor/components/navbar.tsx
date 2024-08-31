"use client";

import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { Hint } from "@/components/hint";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  ChevronDown,
  Download,
  MousePointerClick,
  Redo2,
  Undo2,
} from "lucide-react";
import { CiFileOn } from "react-icons/ci";
import { BsCloudCheck } from "react-icons/bs";
import { ActiveTool } from "../types";
import { cn } from "@/lib/utils";

interface NavbarProps {
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export const Navbar = ({ activeTool, onChangeActiveTool }: NavbarProps) => {
  return (
    <nav className="w-full flex items-center p-4 h-[68px] gap-x-8 border-b lg:pl-[34px]">
      <Logo />
      <div className="w-full flex items-center gap-x-1 h-full">
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button size="sm" variant="ghost">
              文件
              <ChevronDown className="size-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="start" className="min-w-60">
            <DropdownMenuItem
              onClick={() => {}} // TODO:
              className="flex items-center gap-x-2"
            >
              <CiFileOn className="size-8" />
              <div>
                <p>打开</p>
                <p className="text-xs text-muted-foreground">打开JSON文件</p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Separator orientation="vertical" className="mx-2" />
        {/* 选择工具 */}
        <Hint label="选择" side="bottom" sideOffset={10}>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onChangeActiveTool("select")}
            className={cn(activeTool === "select" && "bg-gray-100")}
          >
            <MousePointerClick className="size-4" />
          </Button>
        </Hint>
        {/* 撤销 */}
        <Hint label="撤销" side="bottom" sideOffset={10}>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {}} // TODO
            className="" // TODO
          >
            <Undo2 className="size-4" />
          </Button>
        </Hint>
        {/* 重做 */}
        <Hint label="重做" side="bottom" sideOffset={10}>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {}} // TODO
            className="" // TODO
          >
            <Redo2 className="size-4" />
          </Button>
        </Hint>

        <Separator orientation="vertical" className="mx-2" />

        <div className="flex items-center gap-x-2">
          <BsCloudCheck className="size-[20px] text-muted-foreground" />
          <div className="text-xs text-muted-foreground">保存</div>
        </div>

        <div className="ml-auto flex items-center gap-x-4">
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="ghost">
                导出
                <Download className="size-4 ml-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-60">
              <DropdownMenuItem
                className="flex items-center gap-x-2"
                onClick={() => {}} // TODO
              >
                <CiFileOn className="size-8" />
                <div>
                  <p>JSON</p>
                  <p className="text-xs text-muted-foreground">编辑后保存</p>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem
                className="flex items-center gap-x-2"
                onClick={() => {}} // TODO
              >
                <CiFileOn className="size-8" />
                <div>
                  <p>PNG</p>
                  <p className="text-xs text-muted-foreground">便于分享</p>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem
                className="flex items-center gap-x-2"
                onClick={() => {}} // TODO
              >
                <CiFileOn className="size-8" />
                <div>
                  <p>JPG</p>
                  <p className="text-xs text-muted-foreground">便于创作</p>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem
                className="flex items-center gap-x-2"
                onClick={() => {}} // TODO
              >
                <CiFileOn className="size-8" />
                <div>
                  <p>SVG</p>
                  <p className="text-xs text-muted-foreground">便于矢量图</p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};
