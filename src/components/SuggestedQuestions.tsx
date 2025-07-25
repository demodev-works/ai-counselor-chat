import { cn } from "@/lib/utils";

interface SuggestedQuestionsProps {
  onQuestionClick: (question: string) => void;
  isLargeText?: boolean;
}

const suggestedQuestions = [
  "안녕하세요! 도움이 필요해요",
  "이전 대화 내용을 확인하고 싶어요",
  "새로운 주제로 대화하고 싶어요",
  "대화 기록을 정리해주세요",
];

export const SuggestedQuestions = ({ onQuestionClick, isLargeText = false }: SuggestedQuestionsProps) => {
  return (
    <div className="flex justify-center mt-8 mb-6">
      <div className="flex flex-wrap gap-2 justify-center max-w-4xl">
        {suggestedQuestions.map((question, index) => (
          <button
            key={index}
            onClick={() => onQuestionClick(question)}
            className={cn(
              "px-3 py-2 rounded-lg border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors",
              isLargeText ? "text-base" : "text-sm"
            )}
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
};