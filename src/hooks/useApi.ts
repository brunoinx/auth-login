import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    const response = await api.post("/validate", token);
    return response.data;
  },

  signIn: async (email: string, password: string) => {
    const response = await api.post("/sign", { email, password });
    return response.data;
  },

  signOut: async () => {
    const response = await api.post("/signOut");
    return response.data;
  },
});
