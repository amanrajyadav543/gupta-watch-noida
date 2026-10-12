import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import analog from "../assets/cat-analog.jpg";
import smart from "../assets/cat-smart.jpg";
import straps from "../assets/cat-straps.jpg";
import women from "../assets/cat-women.jpg";
import { categories, wa } from "../data";

const images = { analog, smart, straps, women };

export default function Categories() {
  return (
    <section id="shop" className="bg-paper text-night py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[12px] uppercase tracking-[0.3em] text-gold-deep font-medium">Shop the store</p>
            <h2 className="mt-3 font-display font-bold uppercase text-5xl sm:text-7xl leading-[0.95]">
              Find your <span className="text-gold-deep">watch</span>
            </h2>
          </motion.div>
          <p className="max-w-sm text-night/60 leading-relaxed">
            A wide, affordable range in store — visitors call out the
            selection and the knowledgeable staff. Pick a category and we'll
            share what's in stock on WhatsApp.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((c, i) => (
            <motion.a
              key={c.key}
              href={wa(c.enquiry)}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative block aspect-[3/4] overflow-hidden rounded-2xl bg-night"
            >
              <img
                src={images[c.key]}
                alt={c.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night via-night/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-[11px] uppercase tracking-[0.24em] text-gold-light">{c.tag}</p>
                <h3 className="mt-2 font-display font-bold uppercase text-3xl leading-none">{c.title}</h3>
                <span className="mt-4 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-gold">
                  Enquire <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
