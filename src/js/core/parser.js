import { toRPN } from './validators.js';
import { tokenize } from './tokenizer.js';


export function parseExpression(expression) {
    const tokens = tokenize(expression);

    if (!tokens?.length) {
        throw new Error('Invalid tokens');
    }

    return toRPN(tokens);
}