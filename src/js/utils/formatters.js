export function formatNumber(num) {
    if (Math.abs(num) > 1e10) {
        return num.toExponential(4);
    }

    return Number(num.toFixed(2)).toLocaleString('pt-BR');
}

export function preprocessPercentage(expr) {
    expr = expr.replace(
        /(\d+(\.\d+)?)([+\-])(\d+(\.\d+)?)%/g,
        (_, base, _d1, operator, percent) => {
            const value = (parseFloat(base) * parseFloat(percent)) / 100;
            return `${base}${operator}${value}`;
        }
    );

    expr = expr.replace(
        /(\d+(\.\d+)?)%/g,
        (_, num) => parseFloat(num) / 100
    );

    return expr;
}

