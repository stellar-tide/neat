class MinHeap {
    #heap: [number, number][] = [];

    #comparator = (a: [number, number], b: [number, number]): number => {
        return this.#distance(a) - this.#distance(b);
    }

    #distance([x, y]: [number, number]): number {
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    }

    constructor() {}

    push(point: [number, number]): void {
        this.#heap.push(point);
        this.#heap.sort(this.#comparator);
    }

    pop(): [number, number] {
        return this.#heap.pop();
    }

    get size(): number {
        return this.#heap.length;
    }
}
class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        const heap = new MinHeap();
        const closest = [];
        for (const point of points) {
            heap.push(point as [number, number]);
            if (heap.size > k) heap.pop();
        }
        while (heap.size > 0) {
            closest.push(heap.pop());
        }
        return closest;
    }
}
/**
 * Given: 2D array of integer points, where points_i = [x_i, y_i], integer k
 * Find: k closest points to the origin in any order (euclid distance: sqrt((x_1 - x_2)^2 + (y_1 - y_2)^2))
 * Assume: k <= points length between 1 and 1000, coords between -100 and 100
 * Goal: O(nlogk) time, O(k) space
 * 
 * Ideas
 * -----
 * (a)  min heap of size k, comparator is distance from origin:
 *
 * Alg
 * ---
 * initialize min heap w comparator of distance to origin
 * init closest = []
 * for each point
 *      push point
 *      if heap size > k: pop heap
 * while heap size > 0:
 *      closest push heap pop
 * return closest
 */