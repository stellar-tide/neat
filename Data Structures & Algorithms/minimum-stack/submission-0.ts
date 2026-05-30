class MinStack {
    #minStack: number[];
    #valStack: number[];

    constructor() {
        this.#minStack = [];
        this.#valStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.#valStack.push(val);
        this.#minStack.push(Math.min(val, this.#minStack.at(-1) ?? Infinity));
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.#valStack.pop();
        this.#minStack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.#valStack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.#minStack.at(-1);
    }
}
