class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        let j = numbers.length - 1;
        while (i < j) {
            const sum = numbers[i] + numbers[j];
            if (sum === target) {
                return [i + 1, j + 1];
            } else if (sum < target) {
                i++;
            } else {
                j--;
            }
        }
    }
}
