import HeroIllustration from "./components/HeroIllustration";

const gradientDots = Array.from({ length: 16 }, (_, index) => index);

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(58,210,159,0.18),transparent_55%),radial-gradient(circle_at_bottom,rgba(249,115,22,0.12),transparent_60%),linear-gradient(135deg,#020617,#0f172a_45%,#020617)]" />
      <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-brand-primary/15 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-brand-accent/20 blur-3xl" />

      <section className="relative mx-auto flex w-full max-w-6xl flex-col px-4 pb-24 pt-20 sm:px-8">
        <header className="flex flex-col gap-4 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-primary/80">
            Rewa Rabbits Grocery Delivery
          </p>
          <h1 className="text-4xl font-display font-semibold text-white sm:text-6xl">
            Whimsical freshness delivered with rabbit-fast speed.
          </h1>
          <p className="mx-auto max-w-2xl text-base text-slate-300 sm:mx-0 sm:text-lg">
            Designing the future of farm-to-doorstep experiences with playful storytelling and deeply nutritious selections. Crafted for social media campaigns, press kits, and investor decks.
          </p>
        </header>

        <HeroIllustration />

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white/80">
            <p className="text-xs uppercase tracking-wider text-white/40">Palette</p>
            <div className="mt-4 flex gap-3">
              {["#3AD29F", "#0F172A", "#F97316", "#0B1120"].map((hex) => (
                <div key={hex} className="flex flex-col items-center gap-2">
                  <span className="h-12 w-12 rounded-full" style={{ background: hex }} />
                  <span className="text-[10px] font-mono text-white/60">{hex}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white/80">
            <p className="text-xs uppercase tracking-wider text-white/40">Mood</p>
            <p className="mt-4 text-sm text-white/70">
              Energetic, organic, and sophisticated with a sprinkle of pop-surrealist whimsy to highlight Rewa Rabbits&rsquo; playful brand personality.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white/80">
            <p className="text-xs uppercase tracking-wider text-white/40">Tagline</p>
            <p className="mt-4 text-lg font-semibold text-white">Hop to healthy in under thirty.</p>
            <p className="mt-2 text-xs text-white/60">Download assets &amp; share across socials in seconds.</p>
          </div>
        </div>
      </section>

      <div className="pointer-events-none absolute inset-0 -z-20 opacity-40">
        <div className="mx-auto flex h-full w-full max-w-4xl flex-wrap justify-between gap-8 px-10">
          {gradientDots.map((dot) => (
            <div
              key={dot}
              className="h-20 w-20 rounded-full border border-dashed border-white/10"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
