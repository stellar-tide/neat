class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]) {
        let positives = 0n;
        let negatives = 0n;
        for (const num of nums) {
            if (num >= 0) {
                const flag = 1n << BigInt(num);
                if (positives & flag) return true;
                positives |= flag;
            } else {
                const flag = 1n << BigInt(-num);
                if (negatives & flag) return true;
                negatives |= flag;
            }
        }
        return false;
    }
}
