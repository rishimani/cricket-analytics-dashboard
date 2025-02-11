// src/app/players/page.tsx
"use client";
import Navbar from "@/components/layout/Navbar";
import { useEffect, useState } from "react";
import { cricketApi } from "@/services/api/cricketApi";

interface Player {
  id: string;
  name: string;
  // Add other player properties as needed
}

export default function PlayersPage() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const data = await cricketApi.getPlayers();
        setPlayers(data);
      } catch (err) {
        setError("Failed to fetch players");
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Players</h1>
        <div className="grid grid-cols-1 gap-4">
          {players.map((player) => (
            <div key={player.id} className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{player.name}</h2>
              {/* Add more player details here */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
