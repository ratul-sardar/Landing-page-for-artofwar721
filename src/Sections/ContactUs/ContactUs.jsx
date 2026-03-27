import Button from "../../Components/Button/Button";

export default function ContactUs() {
  return (
    <section
      id="ContactUs Section"
      className="py-16 sm:py-20 border-t border-slate-100"
    >
      <div className="cssContainer grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Content*/}
        <div className="lg:col-span-5 reveal in">
          <h2 className="">Let’s talk</h2>
          <p className="text-slate-600">
            Tell us about the project and how we can help. For catalog access,
            use the Catalog button.
          </p>
          <div className="mt-6 space-y-3 text-sm">
            {/* Contact Link*/}
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl grid place-items-center bg-brand-primary/15 text-brand-dark"></div>
              <a
                href="mailto:info@acmrecords.com"
                className=" hover:text-brand-primary"
              >
                info@acmrecords.com
              </a>
            </div>

            {/* Contact Link*/}
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl grid place-items-center bg-brand-primary/15 text-brand-dark"></div>
              <a href="tel:+1234567890" className=" hover:text-brand-primary">
                +1234567890
              </a>
            </div>

            {/* Contact Link*/}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl grid place-items-center bg-brand-primary/15 text-brand-dark"></div>
                <a
                  href="mailto:info@acmrecords.com"
                  className=" hover:text-brand-primary"
                >
                  info@acmrecords.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content*/}
        <div className="lg:col-span-7 reveal in">
          <form
            id="contactForm"
            onSubmit={(e) => e.preventDefault()}
            noValidate
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium" htmlFor="name">
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:ring-2 focus:ring-brand-primary/40"
                  placeholder="Jane Producer"
                />
                <p
                  className="mt-1 hidden text-xs text-rose-600"
                  data-error="name"
                >
                  Please enter your name.
                </p>
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:ring-2 focus:ring-brand-primary/40"
                  placeholder="you@studio.com"
                />
                <p
                  className="mt-1 hidden text-xs text-rose-600"
                  data-error="email"
                >
                  Enter a valid email.
                </p>
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium" htmlFor="message">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:ring-2 focus:ring-brand-primary/40"
                  placeholder="Usage, territories, timings, budget…"
                />
                <p
                  className="mt-1 hidden text-xs text-rose-600"
                  data-error="message"
                >
                  Please add a short message.
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <label className="inline-flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  required
                  className="h-4 w-4 rounded border-slate-300 text-brand-primary focus:ring-brand-primary/40"
                />
                I consent to be contacted.
              </label>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-5 py-2.5 font-semibold text-brand-dark cursor-pointer"
              >
                Send
              </button>
            </div>

            <p id="formMessage" className=""></p>
          </form>
        </div>
      </div>
    </section>
  );
}
