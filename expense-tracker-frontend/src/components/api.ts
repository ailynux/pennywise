import axios from 'axios';

// Create an Axios instance with the base URL
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5253',
});

export default api;
