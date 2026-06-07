class Solution {
    /**
     * Given: array of ints num, previously sorted ascending, rotated 1 to n times; int target
     * Find: Index of target or -1 if not present
     * Assume: nums are unique, 1 <= len <= 1000, -1000 <= nums[i], k <= 1000
     * Goal: O(log n) time, O(1) space
     * 
     * Examples:    0 1 2 3 4 5
     * 1.   nums = [3 4 5 6|1!2],   target = 1
     *              l   l l 
     *                      r r
     *                  m m m
     *                      L
     *                        R
     *                      M
     * 
     * Ideas:
     * 1. binary search, find transition point -> two windows: before and after
     *         - if nums[0] <= target <= nums[l] (target in before): L = 0, R = l
     *         - else (target in after): L = r, R = nums.length - 1
     *              return nums[L] === target ? L : -1
     * 
     * isBeforeRotation(nums, i): return nums[i] > nums[nums.length - 1]
     * 
     * ifBeforeSearch(nums, i): return nums[i] <= target
     *         
     */
    search(nums: number[], target: number): number {
        let l = 0;
        let r = nums.length - 1;
        let L = l;
        let R = r;

        if (this.isBeforeRotation(nums, l)) {
            while (r - l > 1) {
                const mid = Math.floor((l + r) / 2);
                if (this.isBeforeRotation(nums, mid)) {
                    l = mid;
                } else {
                    r = mid;
                }
            }
            if (nums[0] <= target && target <= nums[l]) {
                R = l;
            } else {
                L = r;
            }
        }

        if (!this.isBeforeSearch(nums, L, target)) return -1;
        if (this.isBeforeSearch(nums, R, target)) return nums[R] === target ? R : -1;

        while (R - L > 1) {
            const M = Math.floor((L + R) / 2);
            if (this.isBeforeSearch(nums, M, target)) {
                L = M;
            } else {
                R = M;
            }
        }
        return nums[L] === target ? L : -1;
    }

    isBeforeRotation(nums: number[], i: number): boolean {
        return nums[i] > nums[nums.length - 1];
    }

    isBeforeSearch(nums: number[], i: number, target: number): boolean {
        return nums[i] <= target;
    }
}
