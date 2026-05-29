class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        const countsS1 = this.countChars(s1);
        const countsS2 = new Map<string, number>();
        let l = 0;
        
        for (let r = 0; r < s2.length; r++) {
            countsS2.set(s2[r], 1 + (countsS2.get(s2[r]) || 0));

            if ((r - l + 1) > s1.length) {
                countsS2.set(s2[l], countsS2.get(s2[l]) - 1);
                l++;
            }
            if (this.countsEqual(countsS1, countsS2)) {
                return true
            }
        }

        return false;
    }

    countChars(s: string): Map<string, number> {
        const counts = new Map<string, number>();
        for (const c of s) {
            counts.set(c, 1 + (counts.get(c) || 0));
        }
        return counts;
    }

    countsEqual(countsS1: Map<string, number>, countsS2: Map<string, number>): boolean {
        for (const [c, s1Count] of countsS1.entries()) {
            if ((countsS2.get(c) || 0) !== s1Count) {
                return false;
            }
        }
        return true;
    }
}
