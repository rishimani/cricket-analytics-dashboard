"use client";
import Navbar from "./Navbar";
import MatchesOverview from "../charts/MatchesOverview";

export default function DashboardContainer() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Cricket Analytics Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <MatchesOverview />
          </div>
        </div>
      </div>
    </div>
  );
}
