import { evaluate } from './evaluator.js';
import { parseExpression } from './parser.js';

import {
    popResult,
    showError,
    animateResult,
    updateExpressionDisplay,
} from '../ui/display.js';
import {
    formatNumber,
    preprocessPercentage,
} from '../utils/formatters.js';

import { calculatorState } from '../state/calculator-state.js';


function executeCalculation(expression) {
    const rpn = parseExpression(expression);

    const result = evaluate(rpn);

    if (!Number.isFinite(result)) {
        throw new Error('Invalid result');
    }

    return result;
}

export function calculate() {
    try {
        const preprocessedExpression = preprocessPercentage(
            calculatorState.expression
        );

        const answer = executeCalculation(preprocessedExpression);

        const previousResult = Number(calculatorState.result || 0);

        calculatorState.result = formatNumber(answer);

        animateResult(previousResult, answer);

        popResult();

        updateExpressionDisplay(`${calculatorState.expression}`);
    } catch (error) {
        showError();
    }
}