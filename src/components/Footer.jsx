import { FiPhone, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { company, navLinks, wa } from "../data";

export default function Footer() {
  return (
    <footer className="bg-[#06080f] border-t border-white/10 text-white/55">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="font-display font-bold text-3xl tracking-[0.12em] text-gradient-gold">GUPTA WATCH</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.4em]">Sales &amp; Service · Noida</p>
          <p className="mt-4 text-sm leading-relaxed">{company.hindi}</p>
        </div>
        <nav className="flex flex-col gap-3 text-sm">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="space-y-3 text-sm">
          <p className="flex items-start gap-2"><FiMapPin className="mt-0.5 shrink-0" /> Shop No. 5, Sector 62, Noida 201309</p>
          <a href={`tel:${company.phoneTel}`} className="flex items-center gap-2 hover:text-gold"><FiPhone /> {company.phone}</a>
          <a href={wa("Hi Gupta Watch!")} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gold"><FaWhatsapp /> WhatsApp</a>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 px-5 text-center text-[11px] text-white/35">
        © {new Date().getFullYear()} Gupta Watch Sales &amp; Service. Independent multi-brand service centre — brand names belong to their respective owners.
      </div>
    </footer>
  );
}
