import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface ChatSidebarProps {
  isLargeText?: boolean;
}

const mockConversations = {
  "이번 주": [
    { id: "1", title: "양식장 설치허가 문의", lastMessage: "감사합니다" },
    { id: "2", title: "수산물 판매신고 관련", lastMessage: "자세한 설명 부탁드립니다" },
  ],
  "지난 주": [
    { id: "3", title: "어선원부 등록 문의", lastMessage: "서류 검토 완료되었나요?" },
    { id: "4", title: "낚시터 운영신고", lastMessage: "필요 서류가 궁금합니다" },
  ],
  "이번 달": [
    { id: "5", title: "수산업법령 해석 문의", lastMessage: "관련 조항을 알려주세요" },
  ],
};

export const ChatSidebar = ({ isLargeText = false }: ChatSidebarProps) => {
  return (
    <div className="w-72 bg-background border-r flex flex-col h-full">
      {/* 새 대화 버튼 */}
      <div className="p-4 border-b">
        <Button 
          className="justify-start gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
          size="lg"
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
            {Object.entries(mockConversations).map(([dateGroup, conversations]) => (
              <div key={dateGroup} className="space-y-2">
                <h4 className={cn(
                  "text-muted-foreground font-medium px-2",
                  isLargeText ? "text-sm" : "text-xs"
                )}>
                  {dateGroup}
                </h4>
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className="p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors group"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className={cn(
                        "font-medium text-foreground truncate group-hover:text-primary",
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