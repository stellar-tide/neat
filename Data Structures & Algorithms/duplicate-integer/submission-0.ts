class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]) {
        const seen = new Set(nums);
        return seen.size !== nums.length;
    }
}
