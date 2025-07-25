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

interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  lastMessage: string;
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
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: "1",
      title: "양식장 설치허가 문의",
      messages: [],
      lastMessage: "감사합니다",
      timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 일주일 전
    },
    {
      id: "2", 
      title: "수산물 판매신고 관련",
      messages: [],
      lastMessage: "자세한 설명 부탁드립니다",
      timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5일 전
    },
    {
      id: "3",
      title: "어선원부 등록 문의", 
      messages: [],
      lastMessage: "서류 검토 완료되었나요?",
      timestamp: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), // 10일 전
    },
    {
      id: "4",
      title: "낚시터 운영신고",
      messages: [],
      lastMessage: "필요 서류가 궁금합니다", 
      timestamp: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000), // 12일 전
    },
    {
      id: "5",
      title: "수산업법령 해석 문의",
      messages: [],
      lastMessage: "관련 조항을 알려주세요",
      timestamp: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000), // 20일 전
    },
  ]);
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null);
  const [isLargeText, setIsLargeText] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  // 사용자 메시지가 있는지 확인 (초기 AI 메시지 제외)
  const hasUserMessages = messages.some(message => message.isUser);

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

  const handleNewChat = () => {
    // 현재 대화에 사용자 메시지가 있으면 저장
    if (hasUserMessages) {
      const userMessages = messages.filter(msg => msg.isUser);
      const firstUserMessage = userMessages[0]?.text || "";
      const title = firstUserMessage.length > 20 
        ? firstUserMessage.substring(0, 20) + "..." 
        : firstUserMessage || "새 대화";
      
      const newConversation: Conversation = {
        id: Date.now().toString(),
        title,
        messages: [...messages],
        lastMessage: messages[messages.length - 1]?.text || "",
        timestamp: new Date(),
      };
      
      setConversations(prev => [newConversation, ...prev]);
    }
    
    // 새 대화 시작
    setMessages([
      {
        id: Date.now().toString(),
        text: "안녕하세요! AI 상담사입니다. 어떤 도움이 필요하신가요?",
        isUser: false,
        timestamp: new Date(),
      },
    ]);
    setCurrentConversationId(null);
  };

  const handleLoadConversation = (conversationId: string) => {
    const conversation = conversations.find(conv => conv.id === conversationId);
    if (conversation) {
      setMessages(conversation.messages);
      setCurrentConversationId(conversationId);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-chat-background">
      <ChatHeader 
        isLargeText={isLargeText} 
        onToggleLargeText={setIsLargeText}
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      
      <div className="flex flex-1 overflow-hidden">
        {isSidebarOpen && (
          <ChatSidebar 
            isLargeText={isLargeText} 
            conversations={conversations}
            onNewChat={handleNewChat}
            onLoadConversation={handleLoadConversation}
            currentConversationId={currentConversationId}
          />
        )}
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <ScrollArea className="flex-1 bg-chat-background">
            <div className="max-w-4xl mx-auto px-4 py-8 bg-chat-background">
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message.text}
                  isUser={message.isUser}
                  isLargeText={isLargeText}
                />
              ))}
            </div>
          </ScrollArea>
          
          {!hasUserMessages && (
            <div className="flex-shrink-0">
              <SuggestedQuestions 
                onQuestionClick={handleSendMessage}
                isLargeText={isLargeText}
              />
            </div>
          )}
          
          <div className="flex-shrink-0">
            <ChatInput onSendMessage={handleSendMessage} isLargeText={isLargeText} />
          </div>
        </div>
      </div>
    </div>
  );
};