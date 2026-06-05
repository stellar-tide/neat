class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        const INDEX = 0;
        const HEIGHT = 1;
        const stack = [];
        let max = 0;


        for (const [i, height] of heights.entries()) {
            let index = i;
            while (stack.length && stack.at(-1)[HEIGHT] > height) {
                const popped = stack.pop();
                const area = (i - popped[INDEX]) * popped[HEIGHT];
                max = Math.max(area, max);
                index = popped[INDEX];
            }
            if (!stack.length || stack.at(-1)[HEIGHT] < height) {
                stack.push([index, height]);
            }
        }

        while (stack.length) {
            const popped = stack.pop();
            const area = (heights.length - popped[INDEX]) * popped[HEIGHT];
            max = Math.max(area, max);
        }

        return max;
    }
}
