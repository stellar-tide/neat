class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        let dup = 0;
        for (const num of nums) {
            const i = Math.abs(num);
            if (nums[i] < 0) {
                dup = i;
                break;
            } else {
                nums[i] = -1 * nums[i];
            }
        }
        for (let i = 0; i < nums.length; i++) {
            nums[i] = Math.abs(nums[i]);
        }
        return dup;
    }
}
/**
 * Given:   array of ints nums of length n + 1, 1 <= nums[i] <= n, with exactly one repeated integer
 * Find:    the repeated integer
 * Assume:  1 <= n <= 10000
 * Goal:    O(n) time, O(1) space -- nums unmodified
 * 
 * Examples
 * --------
 * (1)  in: nums = [ 1 2 3 2 2 ]        out: 2
 * 
 * (2)  in: nums = [ 1 2 3 4 4 ]        out: 4
 * 
 * Ideas
 * -----
 * (1)  use nums as hashtable, mark nums[i] negative if we saw i, when iterating nums take abs of val to get i, 
 *      exit loop if nums[i] is negative (i is dup), abs all values of nums
 */