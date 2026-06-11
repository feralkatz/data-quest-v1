import { BUDGETS } from "@/data/dateIdeas";
import type { Budget } from "@/types";

interface BudgetSelectorProps {
  value: Budget;
  onChange: (budget: Budget) => void;
}

export function BudgetSelector({ value, onChange }: BudgetSelectorProps) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
      {BUDGETS.map((budget) => {
        const isSelected = value === budget.value;
        return (
          <button
            key={budget.value}
            type="button"
            onClick={() => onChange(budget.value)}
            className={`flex min-h-12 touch-manipulation items-center justify-center gap-1.5 rounded-2xl border-2 px-2 py-2.5 text-sm font-medium transition-all duration-200 sm:min-h-0 sm:justify-start sm:gap-2 sm:rounded-full sm:px-4 ${
              isSelected
                ? "border-violet-400 bg-violet-500 text-white shadow-lg shadow-violet-300/50"
                : "border-white/60 bg-white/50 text-slate-700 hover:border-violet-200 hover:bg-white/80"
            }`}
          >
            <span>{budget.emoji}</span>
            <span>{budget.label}</span>
            <span
              className={`hidden text-xs min-[390px]:inline ${
                isSelected ? "text-violet-100" : "text-slate-400"
              }`}
            >
              {budget.range}
            </span>
          </button>
        );
      })}
    </div>
  );
}
