class MaxHeap {
    #heap: number[] = [];
    #comparator = (a: number, b: number) => a - b;

    constructor(values?: number[]) {
        if (values) {
            this.#heap = values.sort(this.#comparator);
        }
    }

    push(value: number): void {
        this.#heap.push(value);
        this.#heap.sort(this.#comparator);
    }

    pop(): number {
        return this.#heap.pop();
    }

    peek(): number {
        return this.#heap.at(-1);
    }

    get size(): number {
        return this.#heap.length;
    }
}

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        const heap = new MaxHeap(stones);
        while (heap.size > 1) {
            const heavy = heap.pop();
            const light = heap.pop();
            if (heavy !== light) heap.push(heavy - light);
        }
        return heap.size ? heap.peek() : 0;
    }
}
/**
 * Given: array of ints stones representing weights of stones
 * Find: result of simulation where at each step two heaviest stones are smashed, if equal weight both destroyed else
 *          a result stone of weight heavier - lighter is added back to the pile
 * Assume: up to twenty stones, weights between 1 and 100, weights not unique
 * Goal: O(nlogn) time, O(n) space
 * 
 * Ideas
 * -----
 * (a)  max heap:
 *          heapify the stones          O(n)
 *          while heap.size > 1        O(n)    
 *              heavy = pop                     O(log n)
 *              light = pop
 *              if (heavy !== light) push( heavy - light )
 *          return heap.size ? heap.peek : 0
 */
