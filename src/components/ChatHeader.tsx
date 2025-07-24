import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export const ChatHeader = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold bg-gradient-primary bg-clip-text text-transparent">
          AI 상담사
        </h1>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">돋보기</span>
        </div>
        <Switch />
      </div>
    </header>
  );
};