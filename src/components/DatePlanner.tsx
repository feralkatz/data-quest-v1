"use client";

import { useState } from "react";
import { BudgetSelector } from "@/components/BudgetSelector";
import { DateResult } from "@/components/DateResult";
import { MoodSelector } from "@/components/MoodSelector";
import { generateDatePlan } from "@/lib/generateDate";
import type { Budget, DatePlan, Mood } from "@/types";

export function DatePlanner() {
  const [partnerOne, setPartnerOne] = useState("");
  const [partnerTwo, setPartnerTwo] = useState("");
  const [mood, setMood] = useState<Mood>("romantic");
  const [budget, setBudget] = useState<Budget>("moderate");
  const [plan, setPlan] = useState<DatePlan | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  function handleGenerate() {
    setIsGenerating(true);
    setPlan(null);

    setTimeout(() => {
      setPlan(generateDatePlan(partnerOne, partnerTwo, mood, budget));
      setIsGenerating(false);
    }, 600);
  }

  return (
    <div className="mx-auto w-full max-w-3xl space-y-8">
      <section className="rounded-3xl border border-white/60 bg-white/60 p-6 shadow-xl shadow-rose-100/40 backdrop-blur-xl sm:p-8">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-slate-800">Who&apos;s going?</h2>
          <p className="text-sm text-slate-500">
            Enter both names to personalize your date quest
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="partner-one"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500"
            >
              Partner 1
            </label>
            <input
              id="partner-one"
              type="text"
              value={partnerOne}
              onChange={(e) => setPartnerOne(e.target.value)}
              placeholder="Alex"
              className="w-full rounded-xl border-2 border-white/80 bg-white/80 px-4 py-3 text-slate-800 placeholder:text-slate-400 outline-none transition-all focus:border-rose-300 focus:ring-4 focus:ring-rose-100"
            />
          </div>
          <div>
            <label
              htmlFor="partner-two"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500"
            >
              Partner 2
            </label>
            <input
              id="partner-two"
              type="text"
              value={partnerTwo}
              onChange={(e) => setPartnerTwo(e.target.value)}
              placeholder="Jordan"
              className="w-full rounded-xl border-2 border-white/80 bg-white/80 px-4 py-3 text-slate-800 placeholder:text-slate-400 outline-none transition-all focus:border-rose-300 focus:ring-4 focus:ring-rose-100"
            />
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/60 bg-white/60 p-6 shadow-xl shadow-rose-100/40 backdrop-blur-xl sm:p-8">
        <div className="mb-5">
          <h2 className="text-lg font-bold text-slate-800">Pick your vibe</h2>
          <p className="text-sm text-slate-500">
            What kind of date are you in the mood for?
          </p>
        </div>
        <MoodSelector value={mood} onChange={setMood} />
      </section>

      <section className="rounded-3xl border border-white/60 bg-white/60 p-6 shadow-xl shadow-rose-100/40 backdrop-blur-xl sm:p-8">
        <div className="mb-5">
          <h2 className="text-lg font-bold text-slate-800">Set your budget</h2>
          <p className="text-sm text-slate-500">
            Great dates exist at every price point
          </p>
        </div>
        <BudgetSelector value={budget} onChange={setBudget} />
      </section>

      <button
        type="button"
        onClick={handleGenerate}
        disabled={isGenerating}
        className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-violet-500 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-rose-300/40 transition-all hover:shadow-2xl hover:shadow-rose-300/50 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {isGenerating ? (
            <>
              <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Crafting your perfect date...
            </>
          ) : (
            <>
              <span className="transition-transform group-hover:rotate-12">
                💫
              </span>
              Generate Date Idea
            </>
          )}
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-violet-500 via-pink-500 to-rose-500 opacity-0 transition-opacity group-hover:opacity-100" />
      </button>

      {isGenerating && (
        <div className="flex flex-col items-center gap-3 py-8">
          <div className="flex gap-2">
            {["💕", "✨", "🌹", "💫", "🎉"].map((emoji, i) => (
              <span
                key={emoji}
                className="animate-bounce text-2xl"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {emoji}
              </span>
            ))}
          </div>
          <p className="text-sm text-slate-500">Mixing magic ingredients...</p>
        </div>
      )}

      {plan && !isGenerating && (
        <DateResult plan={plan} onGenerateAnother={handleGenerate} />
      )}
    </div>
  );
}
