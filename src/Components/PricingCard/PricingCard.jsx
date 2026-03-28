import Button from "../Button/Button";

export default function PricingCard({
  primary,
  children,
  subtitle,
  bodyText,
  ctaLink,
  price,
  features,
}) {
  return (
    <>
      <div
        className={`card w-full bg-base-100 shadow-lg ring-1 ${primary ? "ring-brand-primary" : "ring-slate-200"}`}
      >
        <div className="card-body">
          {/* Card badge*/}
          {primary && (
            <span className="badge badge-sm bg-brand-primary/20 font-medium">
              Most requested
            </span>
          )}

          {/* Sub Headings*/}
          <p className="mt-2 font-semibold text-brand-dark! text-[1rem]">
            {subtitle}
          </p>
          <p className="">{bodyText}</p>

          {/* Card Title*/}
          <div className="flex gap-4 mt-3">
            <h3 className="">From</h3>
            <span className="text-xl">${price}</span>
          </div>

          {/* Card Details*/}
          <ul className="mt-6 flex flex-col gap-2 ">
            {features.map((feature, index) => (
              <li key={index}>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Cta button*/}
          <div className="mt-6">
            <Button
              primary={primary}
              background={primary ? true : false}
              link={ctaLink}
            >
              {children}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
