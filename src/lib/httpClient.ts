import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/',
  headers: {
    Accept: 'application/json',
    'X-RapidAPI-Key': 'd1bacda54dmshd0f8781440b0905p174b5djsnd8c0fc99c9fb',
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  }
});