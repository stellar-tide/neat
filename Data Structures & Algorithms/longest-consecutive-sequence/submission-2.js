class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const uniqueNums = new Set(nums);
        const starts = [];
        let max = 0;

        for (const num of uniqueNums) {
            if (!uniqueNums.has(num - 1)) {
                starts.push(num);
            }
        }

        for (const start of starts) {
            let num = start;
            let length = 1;
            while (uniqueNums.has(num + 1)) {
                num++;
                length++;
            }
            if (length > max) {
                max = length;
            }
        }

        return max;
    }
}
