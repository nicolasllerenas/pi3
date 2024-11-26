import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8081", // Cambia al puerto de tu backend si es necesario
});

export const registerUser = async (userData) => {
  try {
    const response = await api.post("/auth/register/profesor", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await api.post("/auth/login", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default api;
