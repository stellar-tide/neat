class Solution {
    minWindow(s: string, t: string): string {
        const countsT = new Map<string, number>();
        const countsWindow = new Map<string, number>();
        let l = 0;
        let result = '';
        let min = Infinity;

        for (const c of t) {
            countsT.set(c, 1 + (countsT.get(c) || 0));
        }

        for (let r = 0; r < s.length; r++) {
            countsWindow.set(s[r], 1 + (countsWindow.get(s[r]) || 0));

            while (this.isValidSubstr(countsT, countsWindow)) {
                if (r - l + 1 < min) {
                    result = s.slice(l, r + 1);
                    min = result.length;
                }
                // Shrink from left
                countsWindow.set(s[l], countsWindow.get(s[l])! - 1);
                l++;
            }
        }

        return result;
    }

    isValidSubstr(countsT: Map<string, number>, countsWindow: Map<string, number>): boolean {
        for (const [char, count] of countsT.entries()) {
            if ((countsWindow.get(char) || 0) < count) {
                return false;
            }
        }
        return true;
    }
}