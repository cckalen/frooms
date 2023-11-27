// lib/store.ts
import { writable } from 'svelte/store';

export const statuslist = writable<string[]>([]);

// A store for the processing state
export const isProcessing = writable(false);
export const hideTopBar = writable(false);
// A store for showing or hiding the results grid
export const showResultsGrid = writable(false);

// A store for the current configuration class name 
export const configadminImagePath = writable('windowspath');
export const lookupKey = writable('id');

