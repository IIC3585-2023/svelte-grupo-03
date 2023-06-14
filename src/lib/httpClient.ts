import axios from 'axios';
import { BEN_API_KEY } from './env';

export const apiClient = axios.create({
  baseURL: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/',
  headers: {
    Accept: 'application/json',
    'X-RapidAPI-Key': BEN_API_KEY,
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  }
});