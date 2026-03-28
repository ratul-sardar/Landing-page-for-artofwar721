import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import logo from "../../assets/CueHitsLogo.png";

const services = [
  { line1: "Sync", line2: "Licensing" },
  { line1: "Custom", line2: "Composition" },
  { line1: "Supervision", line2: "Clearances" },
  { line1: "Publishing", line2: "Admin" },
  { line1: "Catalog", line2: "Delivery" },
  { line1: "Stems", line2: "Alt Mixes" },
  { line1: "Metadata", line2: "QA" },
  { line1: "Artist", line2: "Support" },
];

const DURATION = 28;

/**
 * Returns percentage-based positions (0-100)
 * Radius is set to 40% to leave room for the pills (approx 10-15% width)
 */
function getPillPosition(index, total) {
  const angle = (2 * Math.PI * index) / total - Math.PI / 2;
  return {
    left: 50 + 40 * Math.cos(angle),
    top: 50 + 40 * Math.sin(angle),
  };
}

function OurServices() {
  const spinnerRef = useRef(null);
  const pillRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Rotate the whole container
      gsap.to(spinnerRef.current, {
        rotation: 360,
        duration: DURATION,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });

      // Counter-rotate each pill to keep them upright
      pillRefs.current.forEach((pill) => {
        if (pill) {
          gsap.to(pill, {
            rotation: -360,
            duration: DURATION,
            repeat: -1,
            ease: "none",
            transformOrigin: "50% 50%",
          });
        }
      });
    }, spinnerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="OurServices"
      className="py-16 sm:py-24 bg-[#f8fafc] overflow-hidden"
    >
      <div className="cssContainer grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-5 text-center lg:text-left">
          <div className="uppercase tracking-[.15em] text-xs font-bold text-slate-400 mb-3">
            Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6">
            Our Services
          </h2>
          <p className="text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
            From <strong>Sync Licensing</strong> and{" "}
            <strong>Custom Composition</strong> to{" "}
            <strong>Music Supervision</strong>,{" "}
            <strong>Publishing Admin</strong>, and{" "}
            <strong>Catalog Delivery</strong> — we’ve got you covered.
          </p>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 flex justify-center items-center">
          <div className="relative w-full max-w-125 aspect-square">
            {/* The background ring (radius 40% = inset 10%) */}
            <div className="absolute inset-[10%] rounded-full border-2 border-slate-200/60" />

            {/* Centre badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div
                className="card bg-white shadow-xl rounded-full flex flex-col items-center justify-center gap-1 border border-slate-100 overflow-hidden"
                style={{
                  width: "clamp(90px, 20vw, 120px)",
                  height: "clamp(90px, 20vw, 120px)",
                }}
              >
                <img src={logo} alt="Cue Hits" className="w-1/2 h-auto" />
                <span className="text-[8px] sm:text-[10px] font-bold tracking-[.2em] uppercase text-slate-300">
                  Records
                </span>
              </div>
            </div>

            {/* Spinner Container */}
            <div ref={spinnerRef} className="absolute inset-0 z-10">
              {services.map((svc, i) => {
                const { left, top } = getPillPosition(i, services.length);
                return (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${left}%`,
                      top: `${top}%`,
                      width: "clamp(100px, 22vw, 130px)",
                      height: "clamp(55px, 12vw, 75px)",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {/* The Pill */}
                    <div
                      ref={(el) => (pillRefs.current[i] = el)}
                      className="w-full h-full"
                    >
                      <div className="group card bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-500/20 transition-all duration-300 w-full h-full flex flex-col items-center justify-center cursor-default rounded-2xl px-2">
                        <span className="text-[11px] sm:text-[13px] font-bold text-slate-800 leading-tight text-center">
                          {svc.line1}
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-medium text-slate-400 leading-tight text-center mt-0.5">
                          {svc.line2}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
