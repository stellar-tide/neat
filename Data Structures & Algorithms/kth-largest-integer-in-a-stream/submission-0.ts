class MinHeap {
    #elements = [];

    constructor(values?: number[]) {
        if (values.length) {
            this.#elements = [...values].sort((a, b) => b - a);
        }
    }

    push(x: number): void {
        this.#elements.push(x);
        this.#elements.sort((a, b) => b - a);
    }

    pop(): number {
        return this.#elements.pop();
    }

    top(): number {
        return this.#elements.at(-1);
    }

    get size(): number {
        return this.#elements.length;
    }
}

class KthLargest {
    #k: number;
    #heap: MinHeap;
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k: number, nums: number[]) {
        this.#k = k;
        this.#heap = new MinHeap(nums);
        while (this.#heap.size > k) this.#heap.pop();
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.#heap.push(val);
        if (this.#heap.size > this.#k) this.#heap.pop();
        return this.#heap.top();
    }
}
/**
 * Given: stream class
 * Find: implementation that returns kth largest value on every add
 * Assume: nums can be empty, k between 1 and 1000, values not unique
 * Goal: O(mlogk) time where m is number of times add is called, O(k) space
 */