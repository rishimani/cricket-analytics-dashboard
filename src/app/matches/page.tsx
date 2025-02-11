// src/app/matches/page.tsx
"use client";
import Navbar from "@/components/layout/Navbar";
import { useEffect, useState } from "react";
import { cricketApi } from "@/services/api/cricketApi";

interface Match {
  id: string;
  date: string;
  // Add other match properties as needed
}

export default function MatchesPage() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const data = await cricketApi.getMatches();
        setMatches(data);
      } catch (err) {
        setError("Failed to fetch matches");
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Matches</h1>
        <div className="grid grid-cols-1 gap-4">
          {matches.map((match) => (
            <div key={match.id} className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold">
                Match Date: {match.date}
              </h2>
              {/* Add more match details here */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
