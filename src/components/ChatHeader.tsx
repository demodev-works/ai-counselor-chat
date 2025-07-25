import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
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
      
      <div className="flex items-center gap-3">
        <span className="text-white text-sm font-medium">
          돋보기
        </span>
        <Switch 
          checked={isLargeText} 
          onCheckedChange={onToggleLargeText}
          className={cn(
            "h-6 w-11",
            "data-[state=checked]:bg-red-500 data-[state=unchecked]:bg-white/30",
            "transition-all duration-300"
          )}
        />
      </div>
    </header>
  );
};