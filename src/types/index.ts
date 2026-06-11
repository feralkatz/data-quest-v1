export type Mood =
  | "romantic"
  | "adventurous"
  | "cozy"
  | "creative"
  | "foodie";

export type Budget = "free" | "budget" | "moderate" | "splurge";

export interface DateIdea {
  title: string;
  description: string;
  duration: string;
  tip: string;
  emoji: string;
}

export interface DatePlan {
  idea: DateIdea;
  mood: Mood;
  budget: Budget;
  partnerOne: string;
  partnerTwo: string;
}
