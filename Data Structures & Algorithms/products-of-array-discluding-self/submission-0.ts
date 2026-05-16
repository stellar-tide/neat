class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const prefixProducts = [];
        const suffixProducts = [];
        let prefixProduct = 1;
        let suffixProduct = 1;

        for (const num of nums) {
            prefixProducts.push(prefixProduct);
            prefixProduct *= num;
        }

        for (const num of nums.slice().reverse()) {
            suffixProducts.push(suffixProduct);
            suffixProduct *= num;
        }
        suffixProducts.reverse();

        return Array.from(nums.keys()).map(i => prefixProducts[i] * suffixProducts[i]);
    }
}
