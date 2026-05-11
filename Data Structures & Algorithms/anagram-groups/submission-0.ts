class Solution {
    LOWER = 'abcdefghijklmnopqrstuvwxyz';
    CHAR_INDEX_LOOKUP = new Map(this.LOWER.split('').map((c, i) => [c, i]));

    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const seen = new Map<string, string[]>();
        for (const s of strs) {
            const anagramId = this.buildAnagramId(s);
            if (seen.has(anagramId)) {
                seen.set(anagramId, seen.get(anagramId).concat([s]));
            } else {
                seen.set(anagramId, [s]);
            }
        }
        return Array.from(seen.values());
    }

    buildAnagramId(str: string): string {
        const counts = new Array(this.LOWER.length).fill(0);
        for (const c of str) {
            counts[this.CHAR_INDEX_LOOKUP.get(c)] += 1;
        }
        return counts.join(',');
    }
}
