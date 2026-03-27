export default function Badge({ children }) {
  return (
    <>
      <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
        <div className="h-1.5 w-1.5 rounded-full bg-brand-primary"></div>
        {children}
      </div>
    </>
  );
}
