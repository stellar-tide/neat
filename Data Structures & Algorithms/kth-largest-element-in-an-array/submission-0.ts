class MaxHeap {
    #heap = [];
    #comparator = (a: number, b: number) => b - a;

    push(num: number) {
        this.#heap.push(num);
        this.#heap.sort(this.#comparator);
    }

    pop(): number {
        return this.#heap.pop();
    }

    get size(): number {
        return this.#heap.length;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        const heap = new MaxHeap();
        for (const num of nums) {
            heap.push(num);
            if (heap.size > k) heap.pop();
        }
        return heap.pop();
    }
}
/**
 * Given: unsoroted integer array nums, integer k
 * Find: kth largest integer (in sorted order, not distinct)
 * Assume: unsorted, 1 <= k <= length <= 10000, vals between -1000 and 1000, can't sort
 * Goal: O(nlogk) time, O(k) space
 * 
 * Ideas
 * -----
 * (a): max heap, size k
 * 
 * Alg
 * ---
 * init max heap
 * for each num
 *      heap push num
 *      if heap size > k pop
 * return heap pop
 */
