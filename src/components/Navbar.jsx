import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhoneCall, FiMenu, FiX, FiClock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { company, navLinks, wa } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="bg-gradient-gold text-night">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 h-9 flex items-center justify-between text-[11px] sm:text-xs font-medium tracking-wide">
          <span className="flex items-center gap-2">
            <FiClock size={13} /> Open today · Closes 9 PM
          </span>
          <a href={`tel:${company.phoneTel}`} className="hidden sm:flex items-center gap-2">
            <FiPhoneCall size={13} /> Call {company.phone}
          </a>
          <span className="sm:hidden">Sector 62, Noida</span>
        </div>
      </div>

      <div className="bg-night/90 backdrop-blur-xl border-b border-white/8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 h-[68px] flex items-center justify-between">
          <a href="#top" className="flex flex-col leading-none">
            <span className="font-display font-bold text-[26px] tracking-[0.12em] text-gradient-gold">
              GUPTA WATCH
            </span>
            <span className="mt-1 text-[9px] uppercase tracking-[0.42em] text-muted">
              Sales &amp; Service · Noida
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-9 text-[13px] uppercase tracking-[0.16em] font-medium">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-white/70 hover:text-gold transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={wa("Hi Gupta Watch! I'd like to enquire.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-night hover:brightness-110 transition"
            >
              <FaWhatsapp size={16} /> WhatsApp Us
            </a>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden text-white"
            aria-label="Toggle menu"
          >
            {open ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden border-t border-white/8 bg-night"
            >
              <div className="px-5 py-6 flex flex-col gap-5 text-sm uppercase tracking-[0.16em]">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-white/80 hover:text-gold"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href={wa("Hi Gupta Watch! I'd like to enquire.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 font-semibold text-night"
                >
                  <FaWhatsapp size={17} /> WhatsApp Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
