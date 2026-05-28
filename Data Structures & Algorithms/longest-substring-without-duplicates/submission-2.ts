class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let max = 0;
        let charsSeen = 0n;
        let i = 0;
        let j = 0;

        while (j < s.length) {
            const charMask = 1n << BigInt(s.charCodeAt(j));
            if (charMask & charsSeen) {
                max = Math.max(max, j - i);
                while (s[i] !== s[j] && i < j) {
                    charsSeen &= ~(1n << BigInt(s.charCodeAt(i)));
                    i++;
                }
                i++;
            } else {
                charsSeen = charsSeen | charMask;
            }
            j++;
        }

        max = Math.max(max, j - i);
        return max;
    }
}
