export const OPERATORS = {
    '+': {
        precedence: 1,
        associativity: 'left',
        operands: 2,
        fn: (a, b) => a + b
    },

    '-': {
        precedence: 1,
        associativity: 'left',
        operands: 2,
        fn: (a, b) => a - b
    },

    '*': {
        precedence: 2,
        associativity: 'left',
        operands: 2,
        fn: (a, b) => a * b
    },

    '/': {
        precedence: 2,
        associativity: 'left',
        operands: 2,
        fn: (a, b) => {
            if (b === 0) {
                throw new Error('Division by zero');
            }

            return a / b;
        }
    },

    '^': {
        precedence: 3,
        associativity: 'right',
        operands: 2,
        fn: (a, b) => Math.pow(a, b)
    },

    '-u': {
        precedence: 4,
        associativity: 'right',
        operands: 1,
        fn: (a) => -a
    }
};

export const FUNCTIONS = {
    sin: (x) => Math.sin(x * Math.PI / 180),

    cos: (x) => Math.cos(x * Math.PI / 180),

    tan: (x) => Math.tan(x * Math.PI / 180),

    log: (x) => Math.log10(x),

    sqrt: (x) => Math.sqrt(x)
};

export const VALID_KEYS = [
    '0','1','2','3','4','5','6','7','8','9',
    '+','-','*','/','.','%','^','(',')'
];


export const KEYBOARD_FUNCTION_MAP = {
    s: 'sin(',
    c: 'cos(',
    t: 'tan(',
    l: 'log('
};

export const STORAGE_KEY = 'calculator-theme';