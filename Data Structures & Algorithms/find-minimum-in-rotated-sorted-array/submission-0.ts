class Solution {
    /**
     * Given: array of ints nums, previously sorted, rotated 1 to nums.length times
     * Find: minimum element in array
     * Assume: all elements unique, 1 <= len <= 1000, -1000 <= nums[i] <= 1000
     * Goal: O(logn) time, O(1) space
     * 
     * Examples:
     * 1.    0 1 2 3 4 5  
     *      [3 4 5 6|1 2]                   out: 1
     *       l   l
     *                 r 
     *           m 
     *    
     * 3.     0 1 2 3
     *      [|4 5 6 7]
     *        l
     *              r
     * 
     * Ideas:
     * 1. binary search (transition point)
     *      isBefore(i, nums): nums[i] > nums[nums.length - 1]
     *      return: r
     *      if !isBefore(l): return l
     * 
     */
    findMin(nums: number[]): number {
        let l = 0;
        let r = nums.length - 1;
        if (!this.isBefore(nums, l)) return nums[l];

        while (r - l > 1) {
            const mid = Math.floor((l + r) / 2);
            if (this.isBefore(nums, mid)) {
                l = mid;
            } else {
                r = mid;
            }
        }
        return nums[r];
    }

    isBefore(nums: number[], i: number): boolean {
        return nums[i] > nums[nums.length - 1];
    }
}
