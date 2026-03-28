import { useState, useEffect, useRef } from "react";
import { Check, ArrowRight } from "lucide-react";
import Badge from "../../Components/Badge/Badge";
import Button from "../../Components/Button/Button";

const services = [
  {
    id: "brief",
    title: "Creative Brief",
    tagline: "Share the cut, vibe, timing, and rights",
    emoji: "📝",
    desc: "We’ll align on creative references, cut timing, deliverables, and rights (territories, term, media, cues/stems).",
    points: [
      "Use case & format",
      "Budget & rights",
      "References",
      "Timeline & deliverables",
    ],
  },
  {
    id: "search",
    title: "Search & Curation",
    tagline: "Shortlists in hours, not weeks",
    emoji: "⚡",
    desc: "Our team searches the catalog and taps our composers for custom cues. Expect clear options with timings.",
    points: [
      "Multiple options per scene",
      "Alts & cutdowns",
      "Instrumentals & stems",
      "Tempo/key notes",
    ],
  },
  {
    id: "clearance",
    title: "Clearance",
    tagline: "Rights clean & ready",
    emoji: "✅",
    desc: "We handle master & publishing, cue sheets, and all paperwork so you stay focused on the picture.",
    points: [
      "Fast approvals",
      "Global rights",
      "One‑stop where possible",
      "Cue sheets handled",
    ],
  },
  {
    id: "delivery",
    title: "Delivery",
    tagline: "On time, to spec",
    emoji: "📦",
    desc: "We deliver WAV/AIFF, broadcast‑safe peaks, alt mixes, stems, and metadata via SourceAudio.",
    points: [
      "Stems & alts",
      "Broadcast safe",
      "Metadata complete",
      "Secure links",
    ],
  },
  {
    id: "admin",
    title: "Publishing Admin",
    tagline: "Register & collect",
    emoji: "🧾",
    desc: "Works registration and royalty tracking across PROs and platforms.",
    points: [
      "Works registration",
      "Neighboring rights",
      "Statements & reports",
      "Issue resolution",
    ],
  },
];

const DURATION = 5000; // 5 seconds per tab

export default function WeHelp() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressTimerRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    const startAutoplay = () => {
      startTimeRef.current = performance.now();

      const updateProgress = (now) => {
        const elapsed = now - startTimeRef.current;
        const newProgress = Math.min(100, (elapsed / DURATION) * 100);

        setProgress(newProgress);

        if (elapsed >= DURATION) {
          setActiveIndex((current) => (current + 1) % services.length);
          startTimeRef.current = now;
          setProgress(0);
        }

        progressTimerRef.current = requestAnimationFrame(updateProgress);
      };

      progressTimerRef.current = requestAnimationFrame(updateProgress);
    };

    startAutoplay();

    return () => {
      if (progressTimerRef.current) {
        cancelAnimationFrame(progressTimerRef.current);
      }
    };
  }, [activeIndex]);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    setProgress(0);
    startTimeRef.current = performance.now();
  };
  const activeService = services[activeIndex];

  return (
    <section
      id="WeHelp"
      className="relative overflow-hidden py-16 sm:py-24 bg-slate-50 text-slate-900 antialiased"
    >
      {/* Background Elements */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Animated Blobs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-brand-primary/10 blur-[100px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-brand-dark/10 blur-[100px] rounded-full animate-pulse delay-700" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 lg:mb-16">
          <div className="mb-4">
            <Badge>OUR CAPABILITIES</Badge>
          </div>
          <h2 className="">
            We help productions move{" "}
            <span className="text-brand-primary">fast</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Tabs List */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="flex flex-col gap-3">
              {services.map((service, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={service.id}
                    onClick={() => handleTabClick(index)}
                    className={`group relative w-full overflow-hidden rounded-2xl border transition-all duration-300 p-4 text-left ${
                      isActive
                        ? "bg-white border-brand-primary/20 shadow-xl shadow-brand-primary/5 translate-x-2"
                        : "bg-transparent border-transparent hover:bg-slate-100/50 grayscale opacity-60 hover:opacity-100 hover:grayscale-0"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{service.emoji}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3
                            className={`font-bold ${isActive ? "text-slate-900" : "text-slate-600"}`}
                          >
                            {service.title}
                          </h3>
                          <span className="text-[10px] font-bold text-slate-400">
                            {index + 1}/{services.length}
                          </span>
                        </div>
                        <p className="text-sm text-slate-500 mt-0.5 font-medium">
                          {service.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="mt-4 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                      {isActive && (
                        <div
                          className="h-full bg-brand-primary transition-none"
                          style={{ width: `${progress}%` }}
                        />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Panel */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-white/40 backdrop-blur-2xl p-8 sm:p-12 shadow-2xl shadow-brand-primary/5 min-h-[450px] flex flex-col justify-center transition-all duration-500">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-brand-dark/5 rounded-full blur-3xl" />

              <div className="relative z-10 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/10 text-2xl shadow-inner">
                    {activeService.emoji}
                  </div>
                  <div>
                    <Badge>{activeService.title}</Badge>
                  </div>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                  {activeService.tagline}
                </h3>

                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  {activeService.desc}
                </p>

                <ul className="grid gap-3 sm:grid-cols-2">
                  {activeService.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white/80 p-3.5 shadow-sm"
                    >
                      <div className="flex-none rounded-full bg-green-50 p-1">
                        <Check
                          className="h-4 w-4 text-green-600"
                          strokeWidth={3}
                        />
                      </div>
                      <span className="text-sm font-bold text-slate-700">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Button background primary rounded>
                    Start a brief
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
