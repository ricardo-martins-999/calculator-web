import { STORAGE_KEY } from '../utils/constants.js';


export function saveTheme(theme) {
    localStorage.setItem(STORAGE_KEY, theme);
}

export function loadTheme() {
    return localStorage.getItem(STORAGE_KEY);
}