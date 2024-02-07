"use client";
import { BarChart as ReBarChart, Bar, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 200,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 500,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 1200,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 1900,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 3200,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 3900,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 4500,
    pv: 4300,
    amt: 2100,
  },
];

const BarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ReBarChart data={data}>
        <Bar dataKey="uv" className="fill-muted-foreground" />
      </ReBarChart>
    </ResponsiveContainer>
  );
};

export { BarChart };
