import Card from "../../Components/Cards/Card";

export default function WhatWeDo() {
  return (
    <>
      <section className="container mx-auto px-6">
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
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </section>
    </>
  );
}
