import { cn } from "@/lib/utils";

interface SuggestedQuestionsProps {
  onQuestionClick: (question: string) => void;
  isLargeText?: boolean;
}

const suggestedQuestions = [
  "투자 상품 추천해주세요",
  "대출 금리가 궁금해요",
  "보험 가입 문의",
  "계좌 개설 방법",
];

export const SuggestedQuestions = ({ onQuestionClick, isLargeText = false }: SuggestedQuestionsProps) => {
  return (
    <div className="flex justify-end mb-6">
      <div className="grid grid-cols-2 gap-2 max-w-md">
        {suggestedQuestions.map((question, index) => (
          <button
            key={index}
            onClick={() => onQuestionClick(question)}
            className={cn(
              "text-left px-3 py-2 rounded-lg border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors",
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