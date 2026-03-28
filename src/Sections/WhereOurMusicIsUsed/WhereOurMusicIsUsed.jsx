import Button from "../../Components/Button/Button";

import {
  Pie,
  PieChart,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "TV", value: 35 },
  { name: "Film", value: 20 },
  { name: "Advertising", value: 18 },
  { name: "Games", value: 12 },
  { name: "Podcasts", value: 10 },
  { name: "Brands", value: 5 },
];

// Teal-to-dark colour ramp matching the image
const COLORS = [
  "#00BCD4",
  "#26C6DA",
  "#00ACC1",
  "#00838F",
  "#006064",
  "#37474F",
];

const renderCustomLegend = ({ payload }) => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "4px 20px",
      marginTop: 16,
      fontFamily: "sans-serif",
      fontSize: 13,
      color: "#555",
    }}
  >
    {payload.map((entry, index) => (
      <div
        key={index}
        style={{ display: "flex", alignItems: "center", gap: 6 }}
      >
        <div
          style={{
            width: 28,
            height: 4,
            borderRadius: 2,
            backgroundColor: entry.color,
          }}
        />
        <span>{entry.value}</span>
      </div>
    ))}
  </div>
);

export default function WhereOurMusicIsUsed() {
  return (
    <>
      <section id="Where our music is used Section" className="py-16 sm:py-20">
        <div className="cssContainer grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Column*/}
          <div className="lg:col-span-5">
            <h2 className="">
              Where our music is <span class="text-brand-primary">used</span>
            </h2>
            <p class="mt-3 text-slate-600">
              A quick snapshot across industries — values are illustrative and
              for demo purposes.
            </p>
            <div className="mt-5">
              <Button background={true} primary={true}>
                Browse catalog
              </Button>
            </div>
          </div>

          {/* Right Column*/}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft min-h-80">
              <ResponsiveContainer width="100%" aspect={1.6}>
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius="52%"
                    outerRadius="78%"
                    dataKey="value"
                    paddingAngle={2}
                    strokeWidth={0}
                  >
                    {data.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value, name) => [`${value}%`, name]}
                    contentStyle={{
                      borderRadius: 8,
                      border: "none",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
                      fontSize: 13,
                    }}
                  />
                  <Legend content={renderCustomLegend} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
