import { cn } from "@/lib/utils";

interface SuggestedQuestionsProps {
  onQuestionClick: (question: string) => void;
  isLargeText?: boolean;
}

const suggestedQuestions = [
  "어업면허 신청 절차가 궁금해요",
  "양식업 허가 조건을 알고 싶어요",
  "수산물 유통업 신고 방법 문의",
  "어선등록 및 운항 관련 규정",
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