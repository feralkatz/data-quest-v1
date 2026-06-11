import { BUDGETS } from "@/data/dateIdeas";
import type { Budget } from "@/types";

interface BudgetSelectorProps {
  value: Budget;
  onChange: (budget: Budget) => void;
}

export function BudgetSelector({ value, onChange }: BudgetSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {BUDGETS.map((budget) => {
        const isSelected = value === budget.value;
        return (
          <button
            key={budget.value}
            type="button"
            onClick={() => onChange(budget.value)}
            className={`flex items-center gap-2 rounded-full border-2 px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
              isSelected
                ? "border-violet-400 bg-violet-500 text-white shadow-lg shadow-violet-300/50"
                : "border-white/60 bg-white/50 text-slate-700 hover:border-violet-200 hover:bg-white/80"
            }`}
          >
            <span>{budget.emoji}</span>
            <span>{budget.label}</span>
            <span
              className={`text-xs ${
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
