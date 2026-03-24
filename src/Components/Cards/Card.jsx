import { Play } from "lucide-react";

export default function Card() {
  return (
    <>
      <div className="card card-md reveal rounded-2xl border border-slate-200 bg-white shadow-lg">
        <div className="card-body">
          {/* card Icon*/}
          <div className="h-10 w-10 rounded-xl bg-brand-primary/10 text-brand-dark grid place-items-center">
            <Play size={20} />
          </div>

          {/* Card Heading*/}
          <p className="font-semibold text-[1rem] text-brand-dark! mt-4">
            Sync Licensing
          </p>

          {/* Card Body Text*/}
          <p className="text-md mt-2">
            Curated tracks cleared fast for TV, film, ads, games, podcasts and
            more.
          </p>
        </div>
      </div>
    </>
  );
}
