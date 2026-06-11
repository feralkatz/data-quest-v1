import { BUDGETS, MOODS } from "@/data/dateIdeas";
import type { DatePlan } from "@/types";

interface DateResultProps {
  plan: DatePlan;
  onGenerateAnother: () => void;
}

export function DateResult({ plan, onGenerateAnother }: DateResultProps) {
  const mood = MOODS.find((m) => m.value === plan.mood);
  const budget = BUDGETS.find((b) => b.value === plan.budget);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="overflow-hidden rounded-3xl border border-white/60 bg-white/70 shadow-xl shadow-rose-200/30 backdrop-blur-xl">
        <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-violet-500 px-6 py-5">
          <p className="text-sm font-medium text-white/80">Your quest awaits</p>
          <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
            {plan.idea.emoji} {plan.idea.title}
          </h2>
          <p className="mt-2 text-sm text-white/90">
            Crafted for{" "}
            <span className="font-semibold">{plan.partnerOne}</span> &{" "}
            <span className="font-semibold">{plan.partnerTwo}</span>
          </p>
        </div>

        <div className="space-y-5 p-6">
          <p className="text-base leading-relaxed text-slate-600">
            {plan.idea.description}
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-3 py-1.5 text-xs font-medium text-rose-600">
              {mood?.emoji} {mood?.label}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-600">
              {budget?.emoji} {budget?.label} ({budget?.range})
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
              ⏱️ {plan.idea.duration}
            </span>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 p-4 border border-amber-100">
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">
              Pro tip
            </p>
            <p className="mt-1 text-sm text-amber-800">{plan.idea.tip}</p>
          </div>

          <button
            type="button"
            onClick={onGenerateAnother}
            className="w-full rounded-2xl border-2 border-dashed border-rose-200 bg-rose-50/50 py-3 text-sm font-semibold text-rose-600 transition-colors hover:border-rose-300 hover:bg-rose-50"
          >
            ✨ Generate another idea
          </button>
        </div>
      </div>
    </div>
  );
}
