export default function Button({ background, primary, children }) {
  return (
    <>
      <a
        className={`inline-flex items-center gap-2 rounded-full ${background ? (primary ? "bg-brand-primary" : "bg-brand-dark") : ""} px-4 py-2 font-semibold text-brand-dark ring-1 ${primary ? " ring-brand-primary/20" : "ring-slate-200"} hover:opacity-90 cursor-pointer`}
      >
        {children}
      </a>
    </>
  );
}
