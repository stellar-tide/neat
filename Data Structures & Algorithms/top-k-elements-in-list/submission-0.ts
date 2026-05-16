class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const counts = new Map<number, number>();
        for (const num of nums) {
            if (counts.has(num)) {
                counts.set(num, counts.get(num) + 1);
            } else {
                counts.set(num, 1);
            }
        }
        const sortedCountEntries = Array.from(counts.entries()).sort(([_, countA], [__, countB]) => countB - countA);
        return sortedCountEntries.slice(0, k).map(([num, count]) => num);
    }
}
