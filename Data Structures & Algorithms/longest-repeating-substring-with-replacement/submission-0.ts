class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const counts = new Map<string, number>();
        let max = 0;
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            counts.set(s[r], 1 + (counts.get(s[r]) || 0));
            
            while((r - l + 1) - Math.max(...counts.values()) > k) {
                counts.set(s[l], counts.get(s[l]) - 1);
                l++;
            }

            max = Math.max(r - l + 1, max);
        }
        return max;
    }
}
