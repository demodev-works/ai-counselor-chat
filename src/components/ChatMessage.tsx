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
        "flex gap-3 max-w-[70%]",
        isUser ? "flex-row-reverse" : "flex-row"
      )}>
        {!isUser && (
          <div className="flex-shrink-0 w-8 h-8 mt-1">
            <img 
              src="/lovable-uploads/f6fd0b32-ed0a-4d04-9bd2-46d182669f2b.png" 
              alt="AI Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        )}
        <div className={cn(
          "px-4 py-3 rounded-2xl shadow-soft",
          isUser 
            ? "bg-chat-user-bubble text-primary-foreground rounded-br-md" 
            : "bg-chat-ai-bubble border border-border rounded-bl-md"
        )}>
          <p className={cn(
            "leading-relaxed whitespace-pre-wrap",
            isLargeText ? "text-xl" : "text-sm"
          )}>
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};