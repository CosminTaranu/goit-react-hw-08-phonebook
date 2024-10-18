import axios from 'axios';

const API_URL = 'https://connections-api.goit.global/users';

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/signup`, userData);
  return response;
};

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response;
};
