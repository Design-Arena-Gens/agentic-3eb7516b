const HeroIllustration = () => {
  return (
    <div className="relative mx-auto mt-8 w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-secondary via-slate-900 to-black p-1 shadow-[0_40px_80px_-40px_rgba(58,210,159,0.6)]">
      <div className="relative grid grid-cols-1 gap-6 rounded-[28px] bg-slate-950/90 p-10 sm:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary/90">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
            Ultra Fresh Delivery
          </div>
          <h2 className="text-4xl font-display font-semibold leading-tight text-white sm:text-5xl">
            Rewa Rabbits brings the farmer&rsquo;s market to your doorstep.
          </h2>
          <p className="max-w-xl text-base text-slate-300 sm:text-lg">
            Curated seasonal produce, artisan pantry essentials, and nutrient-packed meal kits delivered in 30 minutes. Sustainability and community-first sourcing at its core.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-brand-primary/30 transition hover:-translate-y-0.5 hover:shadow-brand-primary/40">
              Schedule a Delivery
            </button>
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-primary/20 text-brand-primary">
                <span className="text-lg">🐇</span>
              </div>
              <div>
                <p className="text-[0.7rem] uppercase tracking-wide text-slate-400">
                  Visit
                </p>
                <p className="text-sm font-semibold text-white">www.rearabbits.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -right-6 h-20 w-20 rounded-full bg-brand-primary/40 blur-3xl" />
          <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-brand-accent/40 blur-3xl" />
          <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-br from-brand-primary/20 via-slate-900 to-slate-950 p-6 backdrop-blur">
            <div className="relative h-full min-h-[260px]">
              <div className="absolute inset-0 -skew-y-3 rounded-[22px] bg-gradient-to-br from-brand-primary/20 via-brand-primary/5 to-transparent opacity-70" />
              <div className="relative grid gap-5">
                <div className="flex items-center justify-between rounded-2xl bg-white/10 p-4 text-white">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/60">Featured Harvest</p>
                    <p className="text-lg font-semibold">Rainbow Crunch Box</p>
                  </div>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-brand-primary">
                    12 items
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-white">
                  {["Sunrise Carrots", "Emerald Kale", "Velvet Tomatoes", "Golden Beets", "Citrus Burst", "Meadow Herbs"].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex aspect-square flex-col items-center justify-center rounded-2xl bg-white/5 backdrop-blur-sm"
                      >
                        <span className="text-2xl">🥕</span>
                        <p className="mt-1 text-[11px] text-center font-medium text-white/80">{item}</p>
                      </div>
                    )
                  )}
                </div>
                <div className="rounded-2xl bg-white/5 p-4 text-white/80">
                  <p className="text-xs uppercase tracking-wider text-white/40">Delivery ETA</p>
                  <div className="mt-2 flex items-baseline justify-between">
                    <p className="text-3xl font-semibold text-brand-primary">29<span className="text-base text-white/60">min</span></p>
                    <p className="text-xs text-white/50">courier: Electric Cargo Bike</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 -bottom-20 h-40 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  );
};

export default HeroIllustration;
