class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0;
        let r = nums.length - 1;
        if (!this.isBefore(nums[l], target)) return -1;
        if (this.isBefore(nums[r], target)) return nums[r] === target ? r : -1;

        while(r - l > 1) {
            const mid = Math.floor((l + r) / 2);
            if (this.isBefore(nums[mid], target)) {
                l = mid;
            } else {
                r = mid;
            }
        }
        return nums[l] === target ? l : -1;
    }

    isBefore(num: number, target: number): boolean {
        return num <= target;
    }
}
