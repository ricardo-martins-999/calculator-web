import {
    appendValue,
    handleAction,
} from '../controller/calculator.controller.js';

import {
    buttonsElement,
} from './elements.js';

import {
    KEYBOARD_FUNCTION_MAP,
    VALID_KEYS,
} from '../utils/constants.js';


function handleButtonClick(button) {
    const { value, action } = button.dataset;

    if (value) {
        appendValue(value);
    }

    if (action) {
        handleAction(action);
    }
}

function handleKeyboardInput(event) {
    const key = event.key;

    if (isValidInput(key)) {
        appendValue(normalizeOperator(key));
        return;
    }

    if (isFunctionShortcut(key)) {
        appendValue(
            KEYBOARD_FUNCTION_MAP[
                key.toLowerCase()
            ]
        );

        return;
    }

    handleSpecialKeys(key);
}

function handleSpecialKeys(key) {
    switch (key) {
        case 'Enter':
            handleAction('calculate');
            break;

        case 'Backspace':
            handleAction('delete');
            break;

        case 'Escape':
        case 'Delete':
            handleAction('clear');
            break;
    }
}

function normalizeOperator(key) {
    return key === '*'
        ? '×'
        : key === '/'
            ? '÷'
            : key;
}

function isValidInput(key) {
    return VALID_KEYS.includes(key);
}

function isFunctionShortcut(key) {
    return key.toLowerCase()
        in KEYBOARD_FUNCTION_MAP;
}

export function initKeyboard() {
    buttonsElement.forEach(button => {
        button.addEventListener(
            'click',
            () => handleButtonClick(button)
        );
    });

    document.addEventListener(
        'keydown',
        handleKeyboardInput
    );
}