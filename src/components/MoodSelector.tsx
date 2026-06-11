import { MOODS } from "@/data/dateIdeas";
import type { Mood } from "@/types";

interface MoodSelectorProps {
  value: Mood;
  onChange: (mood: Mood) => void;
}

export function MoodSelector({ value, onChange }: MoodSelectorProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {MOODS.map((mood) => {
        const isSelected = value === mood.value;
        return (
          <button
            key={mood.value}
            type="button"
            onClick={() => onChange(mood.value)}
            className={`group relative flex flex-col items-center gap-2 rounded-2xl border-2 px-3 py-4 text-center transition-all duration-200 ${
              isSelected
                ? "border-rose-400 bg-rose-50 shadow-lg shadow-rose-200/50 scale-[1.02]"
                : "border-white/60 bg-white/50 hover:border-rose-200 hover:bg-white/80 hover:shadow-md"
            }`}
          >
            <span className="text-2xl transition-transform duration-200 group-hover:scale-110">
              {mood.emoji}
            </span>
            <span
              className={`text-sm font-semibold ${
                isSelected ? "text-rose-600" : "text-slate-700"
              }`}
            >
              {mood.label}
            </span>
            <span className="text-xs text-slate-500 leading-tight hidden sm:block">
              {mood.description}
            </span>
            {isSelected && (
              <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] text-white">
                ✓
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
