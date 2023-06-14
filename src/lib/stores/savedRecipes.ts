import { writable } from 'svelte/store';
import type Recipe from '../types/recipe';

export default writable<Partial<Recipe>[]>([]);
