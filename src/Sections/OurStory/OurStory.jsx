import Button from "../../Components/Button/Button";
import Card from "../../Components/Cards/Card";
import brandLogo from "../../assets/CueHitsLogo.png";

//Card Headings

const heading1 = "Television";
const heading2 = "Film & Trailers";
const heading3 = "Advertising";
const heading4 = "Games";

//Card Body Texts

const body1 = "Reality, scripted, sports, news, promos.";
const body2 = "Score, source cues, trailerizations.";
const body3 = "Brand anthems, cutdowns, social edits.";
const body4 = "In‑game, UI, trailers, esports.";

export default function OurStory() {
  return (
    <>
      <section id="Our Story Section" className="py-16 sm:py-20">
        <div className="cssContainer grid lg:grid-cols-12 gap-8 items-start">
          {/* Bigger Card*/}
          <div className="lg:col-span-5">
            <div className="card card-md rounded-2xl border border-slate-200 bg-white shadow-lg">
              <div className="card-body">
                <img src={brandLogo} alt="Brand Logo" width="150px" />
                <h2 className="mt-4 font-display text-3xl font-bold tracking-tight">
                  Our Story
                </h2>
                <p className="mt-2">
                  ACM Records has served the entertainment industry for decades,
                  representing artists, writers, producers, and composers
                  internationally. We provide premium music supervision, a deep
                  sync‑ready catalog, and publishing administration to support
                  productions at every budget.
                </p>
                <div className="mt-4 flex gap-3">
                  <Button background={true} primary={true}>
                    Explore catalog
                  </Button>
                  <Button primary={true}>Talk to us</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Smaller Cards*/}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4">
              <Card heading={heading1} body={body1}></Card>
              <Card heading={heading2} body={body2}></Card>
              <Card heading={heading3} body={body3}></Card>
              <Card heading={heading4} body={body4}></Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
