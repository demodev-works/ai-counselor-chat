import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  isLargeText?: boolean;
}

export const ChatMessage = ({ message, isUser, isLargeText = false }: ChatMessageProps) => {
  return (
    <div className={cn(
      "flex w-full mb-6",
      isUser ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[70%] px-4 py-3 rounded-2xl shadow-soft",
        isUser 
          ? "bg-chat-user-bubble text-primary-foreground rounded-br-md" 
          : "bg-chat-ai-bubble border border-border rounded-bl-md"
      )}>
        <p className={cn(
          "leading-relaxed whitespace-pre-wrap",
          isLargeText ? "text-lg" : "text-sm"
        )}>
          {message}
        </p>
      </div>
    </div>
  );
};