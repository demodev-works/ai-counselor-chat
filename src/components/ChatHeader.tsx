import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";

interface ChatHeaderProps {
  isLargeText: boolean;
  onToggleLargeText: (checked: boolean) => void;
}

export const ChatHeader = ({ isLargeText, onToggleLargeText }: ChatHeaderProps) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-header-bg backdrop-blur">
      <div className="flex items-center">
        <h1 className={cn(
          "font-semibold text-white",
          isLargeText ? "text-2xl" : "text-xl"
        )}>
          AI 상담사
        </h1>
      </div>
      
      <div className="flex items-center gap-4">
        <Toggle
          pressed={isLargeText}
          onPressedChange={onToggleLargeText}
          className={cn(
            "flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300",
            "bg-white/10 hover:bg-white/20 border border-white/20",
            "data-[state=on]:bg-white/25 data-[state=on]:border-white/40",
            "data-[state=on]:shadow-lg data-[state=on]:scale-105"
          )}
        >
          <Search className={cn(
            "h-4 w-4 transition-all duration-300",
            isLargeText ? "text-white scale-110" : "text-white/80"
          )} />
          <span className={cn(
            "text-white/80 transition-all duration-300",
            isLargeText ? "text-base font-medium text-white" : "text-sm"
          )}>
            돋보기
          </span>
        </Toggle>
      </div>
    </header>
  );
};