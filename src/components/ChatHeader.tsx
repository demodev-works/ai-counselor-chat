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
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <Search className={cn(
            "h-5 w-5 transition-all duration-300",
            isLargeText ? "text-white" : "text-white/70"
          )} />
          <span className={cn(
            "transition-all duration-300",
            isLargeText ? "text-base font-medium text-white" : "text-sm text-white/80"
          )}>
            돋보기
          </span>
        </div>
        <Switch 
          checked={isLargeText} 
          onCheckedChange={onToggleLargeText}
          className={cn(
            "data-[state=checked]:bg-white data-[state=unchecked]:bg-white/20",
            "border-2 transition-all duration-300",
            isLargeText ? "border-white shadow-lg" : "border-white/30"
          )}
        />
      </div>
    </header>
  );
};