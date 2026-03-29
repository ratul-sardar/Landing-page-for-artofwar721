import {
  BookImage,
  BookOpenCheck,
  LoaderCircle,
  PencilRuler,
  Play,
  UserRoundKey,
} from "lucide-react";
import Card from "../../Components/Cards/Card";

// Card Icons
const icon1 = <Play size={20} />;
const icon2 = <LoaderCircle size={20} />;
const icon3 = <UserRoundKey size={20} />;
const icon4 = <BookOpenCheck size={20} />;
const icon5 = <BookImage size={20} />;
const icon6 = <PencilRuler size={20} />;

//Card SubHeadings
const subHeading1 = "";
const subHeading2 = "";
const subHeading3 = "";
const subHeading4 = "";
const subHeading5 = "";
const subHeading6 = "";

//Card Headings
const heading1 = "Sync Licensing";
const heading2 = "Custom Composition";
const heading3 = "Music Supervision";
const heading4 = "Publishing Admin";
const heading5 = "Catalog Management";
const heading6 = "Artist Services";

//Card Body Texts
const body1 =
  "Curated tracks cleared fast for TV, film, ads, games, podcasts and more.";
const body2 =
  "Original cues, branding mnemonics, and scores tailored to the brief.";
const body3 =
  "Brief intake, search, creative direction, clearances, and delivery.";
const body4 = "Works registration, royalty tracking, and global collections.";
const body5 = "Metadata, stems, alt mixes, and SourceAudio delivery.";
const body6 = "Support for releases, DSP delivery, and rights management.";

export default function WhatWeDo() {
  return (
    <>
      <section id="What We Do Section" className="cssContainer py-16 md:py-20">
        {/* What We Do Section*/}

        {/* Section Heading*/}
        <div className="text-center">
          <h2 className="">
            What we <span className="text-brand-primary">do</span>
          </h2>
          <p className="mt-3">
            End‑to‑end music services for creators and clients — fast, clear,
            and rights‑clean.
          </p>
        </div>

        {/* Info Cards*/}
        <div className="mt-10 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            shadow={true}
            icon={icon1}
            subHeading={subHeading1}
            heading={heading1}
            body={body1}
          ></Card>
          <Card
            shadow={true}
            icon={icon2}
            subHeading={subHeading2}
            heading={heading2}
            body={body2}
          ></Card>
          <Card
            shadow={true}
            icon={icon3}
            subHeading={subHeading3}
            heading={heading3}
            body={body3}
          ></Card>
          <Card
            shadow={true}
            icon={icon4}
            subHeading={subHeading4}
            heading={heading4}
            body={body4}
          ></Card>
          <Card
            shadow={true}
            icon={icon5}
            subHeading={subHeading5}
            heading={heading5}
            body={body5}
          ></Card>
          <Card
            shadow={true}
            icon={icon6}
            subHeading={subHeading6}
            heading={heading6}
            body={body6}
          ></Card>
        </div>
      </section>
    </>
  );
}
