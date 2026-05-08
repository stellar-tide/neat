class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string) {
        const sCounts = this.countChars(s);
        const tCounts = this.countChars(t);
        return sCounts.join() === tCounts.join();
    }

    countChars(s: string): number[] {
        const frequencies = this.LOWERCASE.map(_ => 0);
        for (const c of s) {
            const index = this.LOWERCASE_INDEX.get(c);
            frequencies[index] += 1;
        }
        return frequencies;
    }

    LOWERCASE = 'abcdefghijklmnopqrstuvwxyz'.split('');
    LOWERCASE_INDEX = new Map(this.LOWERCASE.map((l, i) => [l, i]));
}
