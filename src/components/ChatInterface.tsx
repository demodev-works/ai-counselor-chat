import { useState } from "react";
import { ChatHeader } from "./ChatHeader";
import { ChatInput } from "./ChatInput";
import { ChatMessage } from "./ChatMessage";
import { ChatSidebar } from "./ChatSidebar";
import { SuggestedQuestions } from "./SuggestedQuestions";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "안녕하세요! AI 상담사입니다. 어떤 도움이 필요하신가요?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [isLargeText, setIsLargeText] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);

    // AI 응답 시뮬레이션
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "감사합니다. 말씀해주신 내용을 이해했습니다. 더 자세히 설명해주시겠어요?",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-chat-background">
      <ChatHeader 
        isLargeText={isLargeText} 
        onToggleLargeText={setIsLargeText}
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      
      <div className="flex flex-1">
        {isSidebarOpen && <ChatSidebar isLargeText={isLargeText} />}
        
        <div className="flex-1 flex flex-col">
          <ScrollArea className="flex-1">
            <div className="max-w-4xl mx-auto px-4 py-8">
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message.text}
                  isUser={message.isUser}
                  isLargeText={isLargeText}
                />
              ))}
              <SuggestedQuestions 
                onQuestionClick={handleSendMessage}
                isLargeText={isLargeText}
              />
            </div>
          </ScrollArea>
          
          <ChatInput onSendMessage={handleSendMessage} isLargeText={isLargeText} />
        </div>
      </div>
    </div>
  );
};