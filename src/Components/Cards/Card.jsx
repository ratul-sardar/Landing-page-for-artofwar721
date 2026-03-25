import { Play } from "lucide-react";

export default function Card({ shadow, icon, subHeading, heading, body }) {
  return (
    <>
      <div
        className={`card card-md reveal rounded-2xl border border-slate-200 bg-white ${shadow ? "shadow-lg" : ""}`}
      >
        <div className="card-body">
          {/* card Icon*/}
          {icon ? (
            <div className="h-10 w-10 mb-4 rounded-xl bg-brand-primary/10 text-brand-dark grid place-items-center">
              {icon}
            </div>
          ) : subHeading ? (
            <p className="text-xs mb-2">{subHeading}</p>
          ) : (
            ""
          )}

          {/* Card Heading*/}
          <p className="font-semibold text-[1rem] text-brand-dark!">
            {heading}
          </p>

          {/* Card Body Text*/}
          <p className="text-md mt-2">{body}</p>
        </div>
      </div>
    </>
  );
}
