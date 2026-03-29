import { Mail, Cloud, Square } from "lucide-react";
import { SiX, SiSoundcloud } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import Button from "../../Components/Button/Button";
import logo from "../../assets/CueHitsLogo.png";

//Cta Link
const ctaLink1 = "https://search.cuehits.com/home";
const ctaLink2 = "#ContactUs Section";

//Footer Links
const navLinks = [
  { name: "Services", href: "#What We Do Section" },
  { name: "About", href: "#Our Story Section" },
  { name: "FAQ", href: "#Faq Section" },
  { name: "Pricing", href: "#Pricing Section" },
];

export default function Footer() {
  return (
    <footer className="bg-base-100 border-t border-base-200">
      <div className="cssContainer py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="avatar">
                <div className="w-24 grid place-items-center">
                  <img
                    src={logo}
                    alt="Cue Hits logo"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight">
                <em>
                  <span className="text-cyan-500">Cue</span>{" "}
                  <span className="text-base-content">Hits</span>
                </em>
              </span>
            </div>

            {/* Tagline */}
            <p className="text-sm text-base-content/60 leading-relaxed max-w-50">
              Sync-ready music, custom composition, music supervision, and
              publishing administration.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-2 mt-1">
              <Button link={ctaLink1}>Catalog</Button>
              <Button link={ctaLink2}> Contact</Button>
            </div>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-3">
            <p className="font-semibold text-base-content text-md tracking-wide">
              Company
            </p>
            <ul className="flex flex-col gap-2">
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

          {/* Resources Column */}
          <div className="flex flex-col gap-3">
            <p className="font-semibold text-base-content text-sm tracking-wide">
              Resources
            </p>
            <ul className="flex flex-col gap-2">
              {["Search catalog", "Licensing options", "Submit your music"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-md text-base-content/60 hover:text-brand-primary transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Stay in touch Column */}
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-base-content text-sm tracking-wide">
              Stay in touch
            </p>

            {/* Email Input */}
            <div className="join">
              <input
                type="email"
                placeholder="Email address"
                className="input input-bordered join-item w-full text-sm focus:outline-none"
              />
              <button className="btn btn-neutral join-item normal-case">
                Join
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-1">
              <a
                href="#"
                className="text-base-content/50 hover:text-base-content transition-colors duration-200"
                aria-label="SoundCloud"
              >
                <Cloud size={20} />
              </a>
              <a
                href="#"
                className="text-base-content/50 hover:text-base-content transition-colors duration-200"
                aria-label="X / Twitter"
              >
                <FaXTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-base-content/50 hover:text-base-content transition-colors duration-200"
                aria-label="Other"
              >
                <Square size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider mt-8 mb-4" />

        {/* Copyright */}
        <p className="text-center text-sm text-base-content/50">
          © 2026 Cue Hits. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
