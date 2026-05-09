import {
    FUNCTIONS,
    OPERATORS,
} from './constants.js';


export function isNumber(token) {
    return !isNaN(token);
}

export function isFunction(token) {
    return token in FUNCTIONS;
}

export function isOperator(token) {
    return token in OPERATORS;
}

export function isRightAssociative(operator) {
    return OPERATORS[operator]?.associativity === 'right';
}

export function normalizeOperator(value) {
    return value
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
}

export function getPrecedence(operator) {
    return OPERATORS[operator]?.precedence ?? 0;
}

export function validateOperand(value) {
    if (value === undefined) {
        throw new Error('Missing operand');
    }
}

export function validateOperands(values, expected) {
    if (values.length !== expected) {
        throw new Error('Invalid expression');
    }
}

export function validateFinalStack(stack) {
    if (stack.length !== 1) {
        throw new Error('Malformed expression');
    }
}

export function interpolate(from, to, progress) {
    return from + (to - from) * progress;
}

export function easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
}