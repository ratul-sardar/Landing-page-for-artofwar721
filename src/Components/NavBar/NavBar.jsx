import { useState } from "react";
import logo from "../../assets/CueHitsLogo.png";
import { LoaderCircle, Menu, X } from "lucide-react";
import Button from "../Button/Button";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#What We Do Section" },
    { name: "About", href: "#Our Story Section" },
    { name: "Capabilities", href: "#OurServices" },
    { name: "FAQ", href: "#Faq Section" },
    { name: "Pricing", href: "#Pricing Section" },
    { name: "Contact", href: "#ContactUs Section" },
  ];

  const ctaLink = "https://search.cuehits.com/home";

  return (
    <div
      className={`${isOpen ? "bg-white" : "bg-white/80 backdrop-blur-md"} border-b border-slate-100 sticky top-0 z-100`}
    >
      <div className="cssContainer">
        <div className="navbar px-0 h-20">
          {/* Site Logo */}
          <div className="navbar-start">
            <a href="#" className="inline-flex items-center gap-2 group">
              <div className="relative w-12 h-12 sm:w-12 sm:h-12 lg:w-20 lg:h-20 flex items-center justify-center  transition-all duration-300 group-hover:scale-105">
                <img
                  src={logo}
                  alt="CueHits Logo"
                  className="w-10 h-10 sm:w-10 sm:h-10 lg:w-20 lg:h-20 object-contain"
                />
              </div>
              <span className="font-display font-black tracking-tight text-xl sm:text-2xl lg:text-3xl text-slate-900">
                <span className="text-brand-primary">Cue</span>Hits
              </span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-brand-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Nav Cta & Mobile Toggle */}
          <div className="navbar-end gap-2">
            <div className="hidden sm:flex">
              <Button background={true} rounded={true} link={ctaLink}>
                <LoaderCircle size={18} className="animate-spin-slow" />
                <span className="hidden md:inline">Browse Catalog</span>
                <span className="md:hidden">Catalog</span>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-600 hover:text-brand-primary transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-white z-90 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="cssContainer py-8 flex flex-col gap-6">
          <ul className="flex flex-col gap-6  tracking-tighter">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-brand-primary transition-colors duration-200 flex items-center justify-between group"
                >
                  {link.name}
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition-all">
                    <X size={16} className="rotate-45" />
                  </div>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-4 pt-8 border-t border-slate-100 flex flex-col gap-4">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
              Ready to start?
            </p>
            <Button background={true} rounded={true} link={ctaLink}>
              <LoaderCircle size={20} className="animate-spin-slow" />
              Open Music Catalog
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
