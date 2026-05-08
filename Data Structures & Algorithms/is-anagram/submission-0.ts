// Brutish force: create maps of char counts, compare maps
class Solution {
    isAnagram(s: string, t: string): boolean {
        const sMap = this.buildMap(s);
        const tMap = this.buildMap(t);
        for (const c of sMap.keys()) {
            if (!tMap.has(c) || tMap.get(c) !== sMap.get(c)) return false;
            tMap.delete(c);
        }
        return tMap.size === 0;
    }

    buildMap(s: string): Map<string, number> {
        const counts = new Map();
        for (const c of s) {
            if (counts.has(c)) {
                counts.set(c, counts.get(c) + 1);
            } else {
                counts.set(c, 1);
            }
        }
        return counts;
    }
}
