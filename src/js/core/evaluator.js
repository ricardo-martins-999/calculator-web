import {
    OPERATORS,
    FUNCTIONS
} from '../utils/constants.js';

import {
    isNumber,
    isOperator,
    isFunction,
    validateOperand,
    validateOperands,
    validateFinalStack,
} from '../utils/helpers.js';


export function evaluate(rpn) {
    const stack = [];

    for (const token of rpn) {
        if (isNumber(token)) {
            stack.push(Number(token));
            continue;
        }

        if (isFunction(token)) {
            const value = stack.pop();

            validateOperand(value);

            stack.push(FUNCTIONS[token](value));
            continue;
        }

        if (isOperator(token)) {
            const operator = OPERATORS[token];
            const operands = stack.splice(-operator.operands);

            validateOperands(operands, operator.operands);

            stack.push(operator.fn(...operands));
        }
    }

    validateFinalStack(stack);

    return stack.pop();
}