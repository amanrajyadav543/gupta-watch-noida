import { motion } from "framer-motion";
import { FiMapPin, FiPhoneCall, FiClock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { company, wa } from "../data";

export default function Visit() {
  return (
    <section id="visit" className="bg-night py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[12px] uppercase tracking-[0.3em] text-gold font-medium">Visit the store</p>
          <h2 className="mt-3 font-display font-bold uppercase text-5xl sm:text-7xl leading-[0.95]">
            Sector 62, <span className="text-gradient-gold">Noida</span>
          </h2>

          <div className="mt-10 space-y-4">
            <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-panel/60 p-5">
              <FiMapPin className="text-gold shrink-0 mt-0.5" size={21} />
              <div className="text-sm text-white/75 leading-relaxed">
                <p className="font-medium text-white">{company.fullName}</p>
                <p>{company.addressLine1}</p>
                <p>{company.addressLine2}</p>
                <p>{company.addressLine3}</p>
              </div>
            </div>
            <a
              href={`tel:${company.phoneTel}`}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-panel/60 p-5 hover:border-gold/50 transition-colors"
            >
              <FiPhoneCall className="text-gold shrink-0" size={21} />
              <span className="text-sm text-white/80">{company.phone}</span>
            </a>
            <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-panel/60 p-5">
              <FiClock className="text-gold shrink-0" size={21} />
              <span className="text-sm text-white/80">Open today · Closes 9 PM</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={wa("Hi Gupta Watch! I'd like to visit the store.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-night hover:brightness-110 transition"
            >
              <FaWhatsapp size={17} /> WhatsApp Us
            </a>
            <a
              href={company.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.14em] hover:border-gold hover:text-gold transition"
            >
              Get Directions
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="min-h-[420px] rounded-2xl overflow-hidden border border-white/10"
        >
          <iframe
            title="Gupta Watch Sales and Service location"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 420 }}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps?q=${company.lat},${company.lng}&z=16&output=embed`}
          />
        </motion.div>
      </div>
    </section>
  );
}
