import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

interface ChatHeaderProps {
  isLargeText: boolean;
  onToggleLargeText: (checked: boolean) => void;
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export const ChatHeader = ({ isLargeText, onToggleLargeText, isSidebarOpen, onToggleSidebar }: ChatHeaderProps) => {
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
          className="h-6 w-11"
        />
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggleSidebar}
          className="text-white hover:bg-white/10"
        >
          {isSidebarOpen ? <X className="h-4 w-4" /> : <Search className="h-4 w-4" />}
        </Button>
      </div>
    </header>
  );
};