import { LoaderCircle, Play, UserRoundKey } from "lucide-react";
import Card from "../../Components/Cards/Card";

//Card SubHeadings
const subHeading1 = "STEP 1";
const subHeading2 = "STEP 2";
const subHeading3 = "STEP 3";

//Card Headings
const heading1 = "Share your brief";
const heading2 = "Get a shortlist";
const heading3 = "License & deliver";
//Bottom part Cards
const heading4 = "Television";
const heading5 = "Film & Trailers";
const heading6 = "Advertising";
const heading7 = "Games";
const heading8 = "Podcasts";
const heading9 = "Brands & Events";

//Card Body Texts
const body1 =
  "Tell us about the project, timings, mood, usage, territories, and budget.";
const body2 =
  "We deliver options, alts, stems and timing notes — usually inside 24–48 hours.";
const body3 =
  "We clear master & publishing, finalize paperwork, and deliver to spec.";
//Bottom part Cards
const body4 = "Reality, scripted, sports, news, promos.";
const body5 = "Score, source cues, trailerizations.";
const body6 = "Brand anthems, cutdowns, social edits.";
const body7 = "In‑game, UI, trailers, esports.";
const body8 = "Themes, bumpers, ID packages.";
const body9 = "Experiential, retail, launches.";

export default function HowItWorks() {
  return (
    <>
      <section id="How It Works Section" className="">
        {/* Top part of the section*/}
        <div className="cssContainer py-16 sm:py-20">
          {/* Section Heading*/}
          <div className="text-center">
            <h2 className="">
              How it <span className="text-brand-primary">works</span>
            </h2>
            <p className="mt-3">
              A three‑step flow designed for producers, editors, and brand
              teams.
            </p>
          </div>
          {/* Info Cards*/}
          <div className="mt-10 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Card
              subHeading={subHeading1}
              heading={heading1}
              body={body1}
            ></Card>
            <Card
              subHeading={subHeading2}
              heading={heading2}
              body={body2}
            ></Card>
            <Card
              subHeading={subHeading3}
              heading={heading3}
              body={body3}
            ></Card>
          </div>
        </div>

        {/* Bottom Cards*/}
        <div className=" py-16 sm:py-20 bg-slate-50">
          <div className="cssContainer grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Card heading={heading4} body={body4}></Card>
            <Card heading={heading5} body={body5}></Card>
            <Card heading={heading6} body={body6}></Card>
            <Card heading={heading7} body={body7}></Card>
            <Card heading={heading8} body={body8}></Card>
            <Card heading={heading9} body={body9}></Card>
          </div>
        </div>
      </section>
    </>
  );
}
