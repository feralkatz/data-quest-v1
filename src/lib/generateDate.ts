import { getDateIdeas } from "@/data/dateIdeas";
import type { Budget, DatePlan, Mood } from "@/types";

export function generateDatePlan(
  partnerOne: string,
  partnerTwo: string,
  mood: Mood,
  budget: Budget
): DatePlan {
  const ideas = getDateIdeas(mood, budget);
  const idea = ideas[Math.floor(Math.random() * ideas.length)];

  return {
    idea,
    mood,
    budget,
    partnerOne: partnerOne.trim() || "Partner 1",
    partnerTwo: partnerTwo.trim() || "Partner 2",
  };
}
