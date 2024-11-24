// src/apis/userApi.ts
import axios from "axios";

const API_URL = "http://localhost:4000/api";


export const fetchUsersApi = async () => {
  const token = "secret"; 
  const response = await axios.get(`${API_URL}/fetch-user-data`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.data; 
};


export const fetchUserByIdApi = async (id: string) => {
  const token = "secret";
  const response = await axios.get(`${API_URL}/fetch-user-data/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};


export const updateUserApi = async (id: string, userData: object) => {
  const token = "secret";
  const response = await axios.put(
    `${API_URL}/update-user-data/${id}`,
    userData,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data; 
};
