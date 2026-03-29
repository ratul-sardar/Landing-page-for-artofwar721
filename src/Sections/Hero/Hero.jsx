import Badge from "../../Components/Badge/Badge";
import Typewriter from "typewriter-effect";
import brandLogo from "../../assets/CueHitsLogo.png";
import Button from "../../Components/Button/Button";
import { LoaderCircle, Play } from "lucide-react";

const ctaLink = "https://search.cuehits.com/home";
const ctaLink2 = "#ContactUs Section";

export default function Hero() {
  return (
    <>
      <div className=" py-16 sm:py-20 bg-slate-50">
        <div className="cssContainer grid items-center gap-12 lg:grid-cols-2">
          {/* Left Panel*/}
          <div className="relative">
            <Badge>Celebrating 30+ years in music</Badge>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              License <br />
              <span className="relative inline-block align-baseline">
                <span id="wordCycle" className="text-brand-primary">
                  <Typewriter
                    options={{
                      strings: [
                        "artist services",
                        "sync‑ready music",
                        "original scores",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </span>
              <br /> that hits the mark
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-xl">
              <em>CueHits</em> delivers sync‑ready music, custom composition,
              music supervision, and publishing administration for TV, film,
              advertising, games, podcasts, and brands.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button background={true} rounded={true} link={ctaLink}>
                <LoaderCircle size={20} /> Browse Catalog
              </Button>
              <Button rounded={true} link={ctaLink2}>
                <Play size={16} /> Request a quote
              </Button>
            </div>

            {/* Mini stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                <p className="text-2xl font-extrabold text-brand-dark!">
                  <span data-counter="" data-target="30">
                    30
                  </span>
                  +
                </p>
                <p className="text-xs text-slate-500">Years</p>
              </div>
              <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                <p className="text-2xl font-extrabold text-brand-dark!">
                  <span data-counter="" data-target="500">
                    500
                  </span>
                  k+
                </p>
                <p className="text-xs text-slate-500">Catalog tracks*</p>
              </div>
              <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                <p className="text-2xl font-extrabold text-brand-dark!">
                  <span data-counter="" data-target="1200">
                    1200
                  </span>
                  +
                </p>
                <p className="text-xs text-slate-500">Placements</p>
              </div>
            </div>
            <p className="mt-2 text-[11px] text-slate-400">
              *Illustrative — explore the catalog for current counts.
            </p>
          </div>

          {/* Right Panel*/}
          <div className="relative">
            <div
              id="tilt"
              className="relative mx-auto w-full max-w-xl rounded-[28px] p-0.5 transition-transform duration-300安全 will-change-transform bg-linear-to-br from-brand-primary to-brand-primary"
              style={{ transform: "rotateX(0deg) rotateY(0deg)" }}
            >
              <div className="relative rounded-[26px] bg-white shadow-2xl ring-1 ring-black/5 overflow-hidden">
                <img
                  src={brandLogo}
                  data-src-logo=""
                  alt="ACM Records emblem"
                  className="h-full w-full object-cover rounded-[26px]"
                />

                {/* Floating glass badge */}
                <div className="absolute left-4 top-4 hidden sm:block">
                  <div className="rounded-2xl bg-white/80 px-4 py-2 backdrop-blur ring-1 ring-slate-200 shadow-lg">
                    <div className="flex items-center gap-2 text-sm font-semibold text-brand-dark">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-brand-primary"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M5 3h14a2 2 0 0 1 2 2v12.5a2 2 0 0 1-2.9 1.8l-3.8-1.9a2 2 0 0 0-1.8 0l-3.6 1.8a2 2 0 0 1-2 0L5 17.5V3Z" />
                      </svg>
                      Sync‑ready
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto mt-6 h-4 w-3/4 rounded-full bg-linear-to-r from-black/10 via-black/5 to-transparent blur-md"></div>
          </div>
        </div>
      </div>
    </>
  );
}
