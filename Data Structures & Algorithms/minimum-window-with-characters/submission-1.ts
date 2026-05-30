class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        const countsT = new Map<string, number>();
        const countsWindow = new Map<string, number>();
        let l = 0;
        let min = 1001;
        let result = '';

        for (const c of t) {
            countsT.set(c, 1 + (countsT.get(c) || 0));
        }

        for (let r = 0; r <= s.length; r++) {
            if (r < s.length) {
                countsWindow.set(s[r], 1 + (countsWindow.get(s[r]) || 0));
            }

            console.log(r);
            console.log(this.isValidSubstr(countsT, countsWindow));

            if (this.isValidSubstr(countsT, countsWindow)) {
                while ((countsWindow.get(s[l]) || 0) > (countsT.get(s[l]) || 0)) {
                    console.log(s[l]);
                    console.log(l);

                    countsWindow.set(s[l], countsWindow.get(s[l]) - 1);

                    console.log(countsWindow);
                    l++;
                }
                if ((Math.min(r, s.length - 1) - l + 1) < min) {
                    result = s.slice(l, Math.min(r, s.length - 1) + 1);
                    min = result.length;
                }
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
