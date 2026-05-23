class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const triplets: number[][] = [];
        const sorted = nums.sort((a, b) => (a - b));

        for (let i = 0; i < sorted.length - 2; i++) {
            if (i > 0 && sorted[i] === sorted[i-1]) {
                continue;
            }

            const target = -1 * sorted[i];
            let j = i + 1;
            let k = sorted.length - 1;

            while (j < k) {
                const sum = sorted[j] + sorted[k];
                if (sum < target) {
                    j++;
                } else if (sum > target) {
                    k--;
                } else {
                    const triplet = [sorted[i], sorted[j], sorted[k]];
                    if (triplets.length === 0 || triplet.toString() !== triplets[triplets.length - 1].toString()) {
                        triplets.push(triplet);
                    }
                    j++;
                    k--;
                }
            }
        }

        return triplets;
    }
}
