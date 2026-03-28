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

// Scene size and ring radius — pills sit centred on the ring circumference
const SIZE = 500;
const RING_RADIUS = SIZE / 2 - 2; // ring sits right at the edge of the scene
const PILL_W = 120;
const PILL_H = 70;
const DURATION = 28;

function getPillPosition(index, total) {
  const angle = (2 * Math.PI * index) / total - Math.PI / 2;
  const cx = SIZE / 2;
  const cy = SIZE / 2;
  return {
    // Centre of pill lands exactly on the ring circumference
    x: cx + RING_RADIUS * Math.cos(angle) - PILL_W / 2,
    y: cy + RING_RADIUS * Math.sin(angle) - PILL_H / 2,
  };
}
function OurServices() {
  const spinnerRef = useRef(null);
  const pillRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial rotation of the whole container
      gsap.to(spinnerRef.current, {
        rotation: 360,
        duration: DURATION,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });

      // Counter-rotation for each pill so they remain upright
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
    }, spinnerRef); // scope to spinnerRef

    return () => ctx.revert(); // clean up
  }, []);
  return (
    <section id="OurServices" className="py-16 sm:py-20 bg-[#f8fafc]">
      <div className="cssContainer grid lg:grid-cols-12 gap-8 items-center">
        {/* Left Column */}
        <div className="lg:col-span-5">
          <div className="uppercase tracking-[.08em] text-sm text-slate-500 mb-2">
            Capabilities
          </div>
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="mt-2 text-slate-600">
            From <strong>Sync Licensing</strong> and{" "}
            <strong>Custom Composition</strong> to{" "}
            <strong>Music Supervision</strong>,{" "}
            <strong>Publishing Admin</strong>, and{" "}
            <strong>Catalog Delivery</strong> — we’ve got you covered.
          </p>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 flex justify-center">
          {/* Animation starts */}
          <div
            style={{ width: SIZE, height: SIZE, maxWidth: "100%" }}
            className="relative"
          >
            {/* The ring */}
            <div className="absolute inset-0 rounded-full border border-base-300" />

            {/* Centre badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div
                className="card card-bordered bg-base-100 shadow-md rounded-full flex flex-col items-center justify-center gap-1 border-base-300 overflow-hidden"
                style={{ width: 116, height: 116 }}
              >
                <img src={logo} alt="Cue Hits" className="w-16 h-auto" />
                <span className="text-[9px] font-medium tracking-widest uppercase text-base-content/30">
                  Records
                </span>
              </div>
            </div>

            {/* Spinner */}
            <div ref={spinnerRef} className="absolute inset-0">
              {services.map((svc, i) => {
                const { x, y } = getPillPosition(i, services.length);
                return (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      left: x,
                      top: y,
                      width: PILL_W,
                      height: PILL_H,
                    }}
                  >
                    <div
                      ref={(el) => (pillRefs.current[i] = el)}
                      className="w-full h-full"
                    >
                      <div className="card card-bordered bg-base-100 shadow-sm hover:shadow-md transition-shadow duration-200 w-full h-full flex flex-col items-center justify-center gap-1 cursor-default rounded-xl border-base-300 hover:border-base-content/20 px-2">
                        <span className="text-[14px] font-semibold text-base-content leading-tight text-center">
                          {svc.line1}
                        </span>
                        <span className="text-[11px] font-normal text-base-content/50 leading-tight text-center">
                          {svc.line2}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Animation ends */}
        </div>
      </div>
    </section>
  );
}

export default OurServices;
