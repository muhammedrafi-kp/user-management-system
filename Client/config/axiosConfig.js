import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:2000',
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('userToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
