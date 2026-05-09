import { FUNCTIONS } from '../utils/constants.js';

import {
    isNumber,
    isFunction,
    isOperator,
    getPrecedence,
    isRightAssociative,
} from '../utils/helpers.js';


export function toRPN(tokens) {
    const output = [];
    const stack = [];

    for (const token of tokens) {
        if (isNumber(token)) {
            output.push(token);
            continue;
        }

        if (isFunction(token)) {
            stack.push(token);
            continue;
        }

        if (token === '(') {
            stack.push(token);
            continue;
        }

        if (token === ')') {
            while (stack.length && stack.at(-1) !== '(') {
                output.push(stack.pop());
            }

            stack.pop();

            if (isFunction(stack.at(-1))) {
                output.push(stack.pop());
            }

            continue;
        }

        if (isOperator(token)) {
            while (stack.length && stack.at(-1) !== '(' &&
                (
                    isRightAssociative(token)
                        ? getPrecedence(stack.at(-1)) > getPrecedence(token)
                        : getPrecedence(stack.at(-1)) >= getPrecedence(token)
                )
            ) {
                output.push(stack.pop());
            }

            stack.push(token);
        }
    }

    while (stack.length) {
        output.push(stack.pop());
    }

    return output;
}