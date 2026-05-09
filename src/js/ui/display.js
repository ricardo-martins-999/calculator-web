import {
    resultElement,
    expressionElement,
} from './elements.js';

import {
    animateValue
} from './animations.js';

import { formatNumber } from '../utils/formatters.js';


export function updateExpressionDisplay(value) {
    expressionElement.textContent = value;
}

export function updateResultDisplay(value) {
    resultElement.textContent = value;
}

export function clearDisplay() {
    updateExpressionDisplay('');
    updateResultDisplay('');
}

export function showError() {
    updateExpressionDisplay('Erro');
    updateResultDisplay('');
}

export function popResult() {
    resultElement.classList.add('pop');

    setTimeout(() => {
        resultElement.classList.remove('pop');
    }, 200);
}

export function animateResult(from, to) {
    animateValue({
        from,
        to,
        duration: 400,
        onUpdate(value) {
            updateResultDisplay(
                formatNumber(value)
            );
        },

        onComplete(value) {
            updateResultDisplay(
                formatNumber(value)
            );
        }
    });
}