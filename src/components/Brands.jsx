import movement from "../assets/movement.jpg";
import { brands } from "../data";

export default function Brands() {
  const loop = [...brands, ...brands];

  return (
    <section id="brands" className="relative overflow-hidden bg-night py-20 sm:py-24 border-y border-white/10">
      <img src={movement} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-[0.12]" />
      <div className="absolute inset-0 bg-gradient-to-b from-night via-night/80 to-night" />

      <div className="relative">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <p className="text-[12px] uppercase tracking-[0.3em] text-gold font-medium">Multi-brand repair</p>
          <h2 className="mt-3 font-display font-bold uppercase text-4xl sm:text-6xl leading-[0.95]">
            We service <span className="text-gradient-gold">all major brands</span>
          </h2>
          <p className="mt-5 text-white/60 leading-relaxed">
            From everyday favourites to smartwatches — if it tells time, bring
            it in.
          </p>
        </div>

        <div className="mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <div className="marquee-track gap-4">
            {loop.map((b, i) => (
              <span
                key={`${b}-${i}`}
                className="mx-2 shrink-0 rounded-full border border-white/15 bg-panel/60 px-8 py-4 font-display font-semibold uppercase text-2xl tracking-[0.12em] text-white/80"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl px-5 text-center text-[11px] leading-relaxed text-white/35">
          Gupta Watch is an independent multi-brand service centre. Brand names
          shown belong to their respective owners and indicate the kinds of
          watches serviced; no affiliation or authorisation is implied.
        </p>
      </div>
    </section>
  );
}
