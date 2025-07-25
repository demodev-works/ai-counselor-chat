import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Conversation {
  id: string;
  title: string;
  messages: any[];
  lastMessage: string;
  timestamp: Date;
}

interface ChatSidebarProps {
  isLargeText?: boolean;
  conversations: Conversation[];
  onNewChat: () => void;
  onLoadConversation: (id: string) => void;
  currentConversationId: string | null;
}

const getTimeGroup = (date: Date) => {
  const now = new Date();
  const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  
  if (diffInDays < 7) return "이번 주";
  if (diffInDays < 14) return "지난 주";
  return "이번 달";
};

export const ChatSidebar = ({ 
  isLargeText = false, 
  conversations, 
  onNewChat, 
  onLoadConversation, 
  currentConversationId 
}: ChatSidebarProps) => {
  // 대화들을 시간별로 그룹화
  const groupedConversations = conversations.reduce((groups, conversation) => {
    const timeGroup = getTimeGroup(conversation.timestamp);
    if (!groups[timeGroup]) {
      groups[timeGroup] = [];
    }
    groups[timeGroup].push(conversation);
    return groups;
  }, {} as Record<string, Conversation[]>);
  return (
    <div className="w-72 bg-background border-r flex flex-col h-full">
      {/* 새 대화 버튼 */}
      <div className="p-4 border-b">
        <Button 
          className="justify-start gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
          size="lg"
          onClick={onNewChat}
        >
          <Plus className="h-4 w-4" />
          <span className={cn(isLargeText ? "text-lg" : "text-sm")}>새 대화</span>
        </Button>
      </div>

      {/* 이전 대화 목록 */}
      <div className="flex-1 p-4">
        <h3 className={cn(
          "font-medium text-muted-foreground mb-4",
          isLargeText ? "text-base" : "text-sm"
        )}>이전 대화</h3>
        <ScrollArea className="h-full">
          <div className="space-y-4">
            {Object.entries(groupedConversations).map(([dateGroup, conversationList]) => (
              <div key={dateGroup} className="space-y-2">
                <h4 className={cn(
                  "text-muted-foreground font-medium px-2",
                  isLargeText ? "text-sm" : "text-xs"
                )}>
                  {dateGroup}
                </h4>
                {conversationList.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={cn(
                      "p-3 rounded-lg cursor-pointer transition-colors group",
                      currentConversationId === conversation.id 
                        ? "bg-primary/10 border border-primary/20" 
                        : "hover:bg-muted"
                    )}
                    onClick={() => onLoadConversation(conversation.id)}
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className={cn(
                        "font-medium truncate",
                        currentConversationId === conversation.id
                          ? "text-primary"
                          : "text-foreground group-hover:text-primary",
                        isLargeText ? "text-base" : "text-sm"
                      )}>
                        {conversation.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};