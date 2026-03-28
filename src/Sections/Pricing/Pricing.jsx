import PricingCard from "../../Components/PricingCard/PricingCard";

//Content Area

// Cta links
const ctaLink1 = "#ContactUs Section";
const ctaLink2 = "#ContactUs Section";
const ctaLink3 = "#ContactUs Section";

// Sub titles
const subtitle1 = "Online & social";
const subtitle2 = "Broadcast & streaming";
const subtitle3 = "All‑media / global";

// Body texts
const bodyText1 = "Web, social, internal";
const bodyText2 = "TV, OTT, pre‑roll";
const bodyText3 = "Global, multi‑year";

//Prices
const price1 = "29";
const price2 = "29";
const price3 = "29";

//Plan features
const feature1 = [
  "1 platform or paid social",
  "1 platform or paid social",
  "1 platform or paid social",
];
const feature2 = [
  "1 platform or paid social",
  "1 platform or paid social",
  "1 platform or paid social",
];
const feature3 = [
  "1 platform or paid social",
  "1 platform or paid social",
  "1 platform or paid social",
];

export default function Pricing() {
  return (
    <>
      <section id="Pricing Section" className="bg-slate-50">
        {/* Top part of the section*/}
        <div className="cssContainer py-16 sm:py-20">
          {/* Section Heading*/}
          <div className="text-center">
            <h2 className="">
              Simple, rights‑clear{" "}
              <span className="text-brand-primary">licensing</span>
            </h2>
            <p className="mt-3">
              Every project is unique — consider these starting points and
              contact us for a quote.
            </p>
          </div>
          {/* Pricing Cards*/}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <PricingCard
              subtitle={subtitle1}
              bodyText={bodyText1}
              price={price1}
              features={feature1}
              ctaLink={ctaLink1}
            >
              Get a quote
            </PricingCard>
            <PricingCard
              primary={true}
              subtitle={subtitle2}
              bodyText={bodyText2}
              price={price2}
              features={feature2}
              ctaLink={ctaLink2}
            >
              Request pricing
            </PricingCard>
            <PricingCard
              subtitle={subtitle3}
              bodyText={bodyText3}
              price={price3}
              features={feature3}
              ctaLink={ctaLink3}
            >
              Talk to licensing
            </PricingCard>
          </div>
        </div>
      </section>
    </>
  );
}
