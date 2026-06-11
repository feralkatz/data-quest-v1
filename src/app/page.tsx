import { DatePlanner } from "@/components/DatePlanner";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-rose-300/30 blur-3xl" />
        <div className="absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-violet-300/30 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-pink-300/25 blur-3xl" />
      </div>

      <header className="relative border-b border-white/40 bg-white/30 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-violet-500 text-lg shadow-lg shadow-rose-300/40">
              💘
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-800">
                Date Quest
              </h1>
              <p className="text-xs text-slate-500">Adventure awaits, together</p>
            </div>
          </div>
          <span className="hidden rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-600 sm:inline-block">
            Beta ✨
          </span>
        </div>
      </header>

      <main className="relative px-3 py-7 sm:px-6 sm:py-14">
        <div className="mx-auto mb-7 max-w-3xl text-center sm:mb-10">
          <p className="mb-3 inline-block rounded-full bg-white/60 px-3 py-1.5 text-xs font-medium text-rose-600 shadow-sm backdrop-blur-sm sm:px-4 sm:text-sm">
            No more &ldquo;what should we do?&rdquo; nights
          </p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-800 sm:text-4xl">
            Plan your next{" "}
            <span className="bg-gradient-to-r from-rose-500 to-violet-500 bg-clip-text text-transparent">
              unforgettable date
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg px-1 text-sm leading-relaxed text-slate-500 sm:px-0 sm:text-base">
            Tell us your names, pick a mood and budget, and we&apos;ll craft the
            perfect date idea — just for the two of you.
          </p>
        </div>

        <DatePlanner />
      </main>

      <footer className="relative border-t border-white/40 bg-white/20 px-4 py-6 text-center backdrop-blur-sm sm:px-6">
        <p className="text-xs text-slate-400">
          Made with 💕 · Date Quest · Mock data only
        </p>
      </footer>
    </div>
  );
}
