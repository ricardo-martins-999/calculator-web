import { initKeyboard } from './ui/buttons.js';
import {
    bindThemeToggle,
    initializeTheme,
} from './ui/theme-toggle.js';


function init() {
    initializeUI();
    initializeEvents();
}

function initializeUI() {
    initializeTheme();
    bindThemeToggle();
}

function initializeEvents() {
    initKeyboard();
}
    

init();