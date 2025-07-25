import { Plus, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const mockConversations = [
  { id: "1", title: "투자 상담 문의", lastMessage: "감사합니다", timestamp: "오늘" },
  { id: "2", title: "대출 관련 질문", lastMessage: "자세한 설명 부탁드립니다", timestamp: "어제" },
  { id: "3", title: "보험 상품 문의", lastMessage: "상품 비교해주세요", timestamp: "2일 전" },
  { id: "4", title: "계좌 개설 문의", lastMessage: "필요 서류가 궁금합니다", timestamp: "3일 전" },
  { id: "5", title: "신용카드 신청", lastMessage: "승인 기간이 어떻게 되나요?", timestamp: "1주일 전" },
];

export const ChatSidebar = () => {
  return (
    <div className="w-80 bg-background border-r flex flex-col h-full">
      {/* 새 대화 버튼 */}
      <div className="p-4 border-b">
        <Button 
          className="w-full justify-start gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
          size="lg"
        >
          <Plus className="h-4 w-4" />
          새 대화
        </Button>
      </div>

      {/* 이전 대화 목록 */}
      <div className="flex-1 p-4">
        <h3 className="text-sm font-medium text-muted-foreground mb-4">이전 대화</h3>
        <ScrollArea className="h-full">
          <div className="space-y-2">
            {mockConversations.map((conversation) => (
              <div
                key={conversation.id}
                className="p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <MessageSquare className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-foreground truncate group-hover:text-primary">
                      {conversation.title}
                    </h4>
                    <p className="text-xs text-muted-foreground truncate mt-1">
                      {conversation.lastMessage}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {conversation.timestamp}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};