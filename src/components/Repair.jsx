import { motion } from "framer-motion";
import {
  PiGearSixBold,
  PiBatteryChargingBold,
  PiWatchBold,
  PiShieldCheckBold,
  PiPuzzlePieceBold,
} from "react-icons/pi";
import { GiMagnifyingGlass } from "react-icons/gi";
import { FaWhatsapp } from "react-icons/fa";
import maker from "../assets/watchmaker.jpg";
import bench from "../assets/repair-bench.jpg";
import { repairServices, steps, wa } from "../data";

const icons = {
  movement: PiGearSixBold,
  glass: GiMagnifyingGlass,
  battery: PiBatteryChargingBold,
  strap: PiWatchBold,
  parts: PiShieldCheckBold,
  smart: PiPuzzlePieceBold,
};

export default function Repair() {
  return (
    <section id="repair" className="relative bg-night py-24 sm:py-32 overflow-hidden">
      <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-gold/30">
              <img src={maker} alt="Watchmaker repairing a watch with a loupe" className="h-full w-full object-cover object-[50%_20%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-right-8 w-44 sm:w-56 aspect-[4/3] rounded-xl overflow-hidden ring-4 ring-night shadow-2xl">
              <img src={bench} alt="Watch dial under inspection on the repair bench" className="h-full w-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <p className="text-[12px] uppercase tracking-[0.3em] text-gold font-medium">Service centre</p>
            <h2 className="mt-3 font-display font-bold uppercase text-5xl sm:text-7xl leading-[0.95]">
              Every brand.
              <br />
              <span className="text-gradient-gold">One trusted bench.</span>
            </h2>
            <p className="mt-6 text-white/65 leading-relaxed max-w-xl">
              Whatever the make — analog, digital or smart — bring it to
              Gupta Watch. Customers describe watches that sat dead for years
              running again within minutes, repaired with original parts and
              fair charges.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {repairServices.map((s, i) => {
                const Icon = icons[s.key];
                return (
                  <motion.div
                    key={s.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
                    className="rounded-xl border border-white/10 bg-panel/70 p-5 hover:border-gold/50 transition-colors"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15 text-gold text-xl">
                      <Icon />
                    </div>
                    <h3 className="mt-4 font-display font-semibold uppercase text-xl tracking-wide">{s.title}</h3>
                    <p className="mt-2 text-sm text-white/55 leading-relaxed">{s.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            <a
              href={wa("Hi Gupta Watch! I'd like to get my watch repaired. Sending a photo now.")}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-night hover:brightness-110 transition"
            >
              <FaWhatsapp size={17} /> Send a photo for a repair quote
            </a>
          </motion.div>
        </div>

        <div className="mt-28 border-t border-white/10 pt-16">
          <p className="text-center text-[12px] uppercase tracking-[0.3em] text-gold font-medium">How it works</p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                className="relative"
              >
                <span className="font-display font-bold text-6xl text-gold/25 leading-none">{s.n}</span>
                <h3 className="mt-2 font-display font-semibold uppercase text-2xl tracking-wide">{s.title}</h3>
                <p className="mt-2 text-sm text-white/55 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
