import { OPERATORS } from '../utils/constants.js';

import {
    clearDisplay,
    updateExpressionDisplay,
} from '../ui/display.js';

import { calculate } from '../core/calculator.js';
import {
    isOperator,
    normalizeOperator,
} from '../utils/helpers.js';
import { calculatorState } from '../state/calculator-state.js';


export function appendValue(value) {
    if (calculatorState.shouldReset) {
        if (isOperator(normalizeOperator(value))) {
            calculatorState.expression = calculatorState.result;
        } else {
            calculatorState.expression = '';
            calculatorState.result = '';
        }

        calculatorState.shouldReset = false;
    }

    const lastChar = calculatorState.expression.slice(-1);

    if (isOperator(normalizeOperator(value)) && isOperator(lastChar)) {
        calculatorState.expression = calculatorState.expression.slice(0, -1) + value;
    } else {
        calculatorState.expression += value;
    }

    updateExpressionDisplay(calculatorState.expression);
}

export function handleAction(action) {
    switch (action) {
        case 'clear':
            handleClear();
            break;

        case 'delete':
            handleDelete();
            break;

        case 'calculate':
            handleCalculate();
            break;
    }
}

function handleClear() {
    calculatorState.expression = '';
    calculatorState.result = '';
    calculatorState.shouldReset = false;
    clearDisplay();
}

function handleDelete() {
    if (calculatorState.shouldReset) {
        handleClear();
        return;
    }

    calculatorState.expression = calculatorState.expression.slice(0, -1);

    updateExpressionDisplay(calculatorState.expression);
}

function handleCalculate() {
    calculate();
    calculatorState.shouldReset = true;
}