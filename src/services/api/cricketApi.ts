import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});

export const cricketApi = {
  async getMatches() {
    const response = await api.get("/matches");
    return response.data;
  },

  async getPlayers() {
    const response = await api.get("/players");
    return response.data;
  },

  async getMatchDetails(id: string) {
    const response = await api.get(`/matches/${id}`);
    return response.data;
  },
};
