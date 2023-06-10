import axios from 'axios';
import { API_URL_V1 } from './env';

export const apiClient = axios.create({
  baseURL: API_URL_V1,
  headers: { Accept: 'application/json' }
});