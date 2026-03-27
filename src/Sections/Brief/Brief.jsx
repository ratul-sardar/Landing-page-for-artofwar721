import { ArrowRight } from "lucide-react";
import Button from "../../Components/Button/Button";

export default function Brief() {
  return (
    <>
      <section id="Brief  Section" className="py-16 sm:py-20">
        <div className="cssContainer">
          <div className="reveal relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 md:p-10 shadow-soft">
            <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-brand-primary/10 to-transparent"></div>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="">Have a brief ready?</h3>
                <p className="mt-4 text-slate-600">
                  Send timings, vibe, usage and budget — we’ll reply fast with
                  options.
                </p>
              </div>
              <div className="md:justify-self-end">
                <Button background={true}>
                  Start the brief <ArrowRight size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
