import { motion } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { FaWhatsapp, FaStar } from "react-icons/fa";
import heroImg from "../assets/hero-watch.jpg";
import { company, stats, wa } from "../data";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-night pt-[104px]">
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[68%]">
        <img
          src={heroImg}
          alt="Vintage gold wristwatch with a brown leather strap on black"
          className="h-full w-full object-cover object-[60%_50%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-night via-night/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-night to-transparent" />
      </div>

      <div className="lg:hidden relative h-[300px] sm:h-[420px]">
        <img
          src={heroImg}
          alt="Vintage gold wristwatch with a brown leather strap on black"
          className="h-full w-full object-cover object-[62%_50%]"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-night to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:min-h-[calc(100vh-104px)] flex flex-col justify-center pt-6 pb-16 lg:py-24">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-night/60 backdrop-blur px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-gold-light"
          >
            <FaStar size={11} /> {company.rating} · {company.reviewCount} reviews · Sector 62, Noida
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="mt-7 font-display font-bold uppercase leading-[0.92] text-[56px] sm:text-[84px] lg:text-[104px] tracking-tight"
          >
            Time, <span className="text-gradient-gold">Perfected.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg leading-relaxed text-white/70 max-w-md"
          >
            Watches worth wearing, and a service centre you can trust. Buy the
            right watch — then get any brand repaired with genuine parts, by
            people who handle it carefully.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#shop"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-night hover:brightness-110 transition"
            >
              Explore Collection <FiArrowRight size={16} />
            </a>
            <a
              href={wa("Hi Gupta Watch! I'd like to get my watch repaired.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-night/40 backdrop-blur px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.14em] hover:border-gold hover:text-gold transition"
            >
              <FaWhatsapp size={16} /> Book a Repair
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-[13px] text-white/70"
          >
            {["Genuine parts", "All major brands", "Quick turnaround"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <FiCheck className="text-gold" size={15} /> {t}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-night/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {stats.map((s) => (
            <div key={s.label} className="py-6 px-3 sm:px-6 text-center">
              <p className="font-display font-bold text-3xl sm:text-4xl text-gradient-gold">{s.value}</p>
              <p className="mt-1 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
