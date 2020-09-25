import { API_URL } from 'react-native-dotenv';
import axios from 'axios';

const api = axios.create({
  baseURL: API_URL,
});

export default api;
