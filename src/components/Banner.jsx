import { motion } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import img from "../assets/lifestyle.jpg";
import { company, wa } from "../data";

export default function Banner() {
  return (
    <section className="relative isolate overflow-hidden bg-night">
      <img src={img} alt="Wristwatch with a leather jacket cuff" className="absolute inset-0 -z-10 h-full w-full object-cover object-[35%_40%]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-l from-night via-night/75 to-night/5" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-28 sm:py-40 flex lg:justify-end">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          <p className="text-[12px] uppercase tracking-[0.3em] text-gold font-medium">Your watch, restored</p>
          <h2 className="mt-4 font-display font-bold uppercase text-5xl sm:text-7xl leading-[0.95]">
            Give it a <span className="text-gradient-gold">second life.</span>
          </h2>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            That watch in the drawer still has years left in it. Bring it to
            Sector 62 — or send a photo — and we'll tell you what it needs.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={wa("Hi Gupta Watch! Can you check my watch?")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-night hover:brightness-110 transition"
            >
              <FaWhatsapp size={17} /> WhatsApp a photo
            </a>
            <a
              href={`tel:${company.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.14em] hover:border-gold hover:text-gold transition"
            >
              <FiPhoneCall size={16} /> {company.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
