class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let left = 0;
        let right = height.length - 1;
        let water = 0;
        let maxLeft = height[left];
        let maxRight = height[right];

        while (left < right) {
            console.log(`left: ${left}, right: ${right}, water: ${water}, maxLeft: ${maxLeft}, maxRight: ${maxRight}`);
            if (maxLeft <= maxRight) {
                left++;
                water += Math.max(0, Math.min(maxLeft, maxRight) - height[left]);
                maxLeft = Math.max(maxLeft, height[left]);
            } else {
                right--;
                water += Math.max(0, Math.min(maxLeft, maxRight) - height[right]);
                maxRight = Math.max(maxRight, height[right]);
            }
        }

        return water;
    }
}
