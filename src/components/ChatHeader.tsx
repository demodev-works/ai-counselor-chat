import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

interface ChatHeaderProps {
  isLargeText: boolean;
  onToggleLargeText: (checked: boolean) => void;
}

export const ChatHeader = ({ isLargeText, onToggleLargeText }: ChatHeaderProps) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-header-bg backdrop-blur">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-white">
          AI 상담사
        </h1>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-white/80">돋보기</span>
        </div>
        <Switch checked={isLargeText} onCheckedChange={onToggleLargeText} />
      </div>
    </header>
  );
};