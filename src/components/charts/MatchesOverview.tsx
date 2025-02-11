"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", matches: 4 },
  { month: "Feb", matches: 3 },
  { month: "Mar", matches: 5 },
  { month: "Apr", matches: 2 },
];

export default function MatchesOverview() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Matches per Month</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="matches" stroke="#2563eb" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
