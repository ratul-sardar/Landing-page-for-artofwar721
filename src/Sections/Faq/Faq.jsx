import Badge from "../../Components/Badge/Badge";

// Site Content Area

//Faq
const faqTitle1 = "How fast can we license a track?";
const faqTitle2 = "Do you handle cue sheets and paperwork?";
const faqTitle3 = "Can you compose original music?";
const faqTitle4 = "Do you work globally?";

const faqBody1 =
  "For most projects we can turn around approvals within 24–72 hours once terms are agreed.";
const faqBody2 =
  "Yes — master & publishing clearances, cue sheets, and final paperwork are all covered.";
const faqBody3 =
  "Absolutely. We craft custom cues, themes, and sonic identities on tight timelines.";
const faqBody4 =
  "Yes, with worldwide clients and creators; usage terms can be tailored by territory.";

export default function Faq() {
  return (
    <>
      <section id="Faq Section" className="">
        <div className="cssContainer py-16 sm:py-20 flex flex-col items-center">
          <Badge></Badge>

          {/* Section Heading*/}
          <div className="text-center mt-4">
            <h2 className="">Everything you need to know</h2>
            <p className="mt-3">
              If you still don’t see what you’re looking for, reach out and
              we’ll help.
            </p>
          </div>

          {/* FAQ Cards*/}
          <div className="mx-auto mt-12 grid w-full max-w-3xl gap-4">
            {/* Faq 1*/}
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title font-semibold">{faqTitle1}</div>
              <div className="collapse-content text-sm">{faqBody1}</div>
            </div>

            {/* Faq 2*/}
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">{faqTitle2} </div>
              <div className="collapse-content text-sm">{faqBody2}</div>
            </div>

            {/* Faq 3*/}
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">{faqTitle3} </div>
              <div className="collapse-content text-sm">{faqBody3}</div>
            </div>

            {/* Faq 3*/}
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">{faqTitle4} </div>
              <div className="collapse-content text-sm">{faqBody4}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
