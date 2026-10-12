import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { company, reviews, pullQuotes } from "../data";

const Stars = ({ size = 13 }) => (
  <span className="flex items-center gap-1 text-gold">
    {Array.from({ length: 5 }).map((_, i) => (
      <FaStar key={i} size={size} />
    ))}
  </span>
);

export default function Reviews() {
  return (
    <section id="reviews" className="bg-paper text-night py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <p className="text-[12px] uppercase tracking-[0.3em] text-gold-deep font-medium">Customer reviews</p>
            <h2 className="mt-3 font-display font-bold uppercase text-5xl sm:text-7xl leading-[0.95]">
              Trusted by <span className="text-gold-deep">{company.reviewCount}</span> customers
            </h2>
          </motion.div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="rounded-2xl bg-night text-white px-8 py-6 flex items-center gap-5">
              <span className="font-display font-bold text-6xl text-gradient-gold leading-none">{company.rating}</span>
              <div>
                <Stars size={15} />
                <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-muted">on Google</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-white p-8 shadow-[0_10px_40px_-18px_rgba(9,12,22,0.35)] flex flex-col"
            >
              <FaQuoteLeft className="text-gold" size={22} />
              <blockquote className="mt-5 text-[15px] leading-relaxed text-night/75 flex-1">{r.text}</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-night/10">
                <Stars />
                <p className="mt-3 font-display font-bold uppercase text-xl tracking-wide">{r.name}</p>
                <p className="text-xs text-night/45">Google review · {r.meta}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {pullQuotes.map((q) => (
            <p key={q} className="rounded-2xl border border-night/10 px-8 py-6 font-display text-2xl uppercase tracking-wide text-night/70 leading-snug">
              “{q}”
            </p>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={company.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full border border-night/20 px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.14em] hover:border-gold-deep hover:text-gold-deep transition"
          >
            Read all {company.reviewCount} reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
