class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let max = 0;
        let i = 0;
        let j = heights.length - 1;

        while (i < j) {
            const volume = Math.min(heights[i], heights[j]) * (j - i);
            if (volume > max) {
                max = volume;
            }
            if (heights[i] < heights[j]) {
                i++;
            } else {
                j--;
            }
        }
        return max;
    }
}
