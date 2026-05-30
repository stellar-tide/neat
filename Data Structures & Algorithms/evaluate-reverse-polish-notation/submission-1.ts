class Solution {
    static #OPERATORS = new Set(['+', '-', '*', '/']);
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const operands: number[] = [];
        
        for (const token of tokens) {
            if (Solution.#OPERATORS.has(token)) {
                const right = operands.pop();
                const left = operands.pop();
                switch (token) {
                    case '+':
                        operands.push(left + right);
                        break;
                    case '-':
                        operands.push(left - right);
                        break;
                    case '*':
                        operands.push(left * right);
                        break;
                    case '/':
                        operands.push(Math.trunc(left / right));
                        break;
                    default:
                        throw new Error('Unexpected non-operand token');
                }
            } else {
                operands.push(parseInt(token));
            }
        }

        return operands[0];
    }
}
