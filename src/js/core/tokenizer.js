export function tokenize(expr) {
    return expr
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .match(/(\d+(\.\d+)?|sin|cos|tan|log|sqrt|[()+\-*/^])/g)
        .map((token, index, tokens) => {
            if (
                token === '-' &&
                (
                    index === 0 ||
                    ['+', '-', '*', '/', '^', '('].includes(tokens[index - 1])
                )
            ) {
                return '-u';
            }
            return token;
        });
}