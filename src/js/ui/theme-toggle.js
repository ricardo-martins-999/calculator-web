import { calculatorState } from '../state/calculator-state.js';
import {
    loadTheme,
    saveTheme,
} from '../utils/storage.js';
import { buttonElement } from './elements.js';


export function initializeTheme() {
    const savedTheme = loadTheme();

    if (savedTheme) {
        calculatorState.theme = savedTheme;
    }

    applyTheme(calculatorState.theme);
}

export function bindThemeToggle() {
    buttonElement   .addEventListener('click', () => {
        toggleTheme();
    });
}

export function toggleTheme() {
    calculatorState.theme =
        calculatorState.theme === 'dark'
            ? 'light'
            : 'dark';

    applyTheme(calculatorState.theme);
    saveTheme(calculatorState.theme);
    updateThemeIcon(calculatorState.theme);
}

function applyTheme(theme) {
    document.documentElement.setAttribute(
        'data-theme',
        theme
    );
}

function updateThemeIcon(theme) {
    const button =
        document.getElementById('theme-toggle');

    button.innerHTML =
        theme !== 'dark'
            ? '<i class="fa-solid fa-moon"></i>'
            : '<i class="fa-solid fa-sun"></i>';
}