import { useState } from "react";
import { Plus, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLargeText?: boolean;
}

export const ChatInput = ({ onSendMessage, isLargeText = false }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  return (
    <div className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4">
      <form onSubmit={handleSubmit} className="flex items-center gap-3 max-w-4xl mx-auto">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="shrink-0 h-10 w-10 rounded-full bg-header-bg hover:bg-header-bg/90 text-white"
        >
          <Plus className="h-4 w-4" />
        </Button>
        
        <div className="flex-1 relative">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="메시지 보내기"
            className={cn(
              "pr-12 rounded-full bg-chat-input-bg border-border focus:ring-2 focus:ring-primary/20 focus:border-primary",
              isLargeText ? "h-14 text-lg" : "h-12 text-base"
            )}
          />
          <Button
            type="submit"
            size="icon"
            disabled={!message.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full border-2 border-header-bg bg-background hover:bg-muted disabled:bg-muted disabled:border-muted transition-all"
          >
            <ArrowUp className="h-4 w-4 text-header-bg" />
          </Button>
        </div>
      </form>
    </div>
  );
};