class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    OPEN_TO_CLOSE = new Map([['(', ')'], ['[', ']'], ['{', '}']]);
    
    isValid(s: string): boolean {
        const opens = [];
        for (const c of s) {
            if (this.OPEN_TO_CLOSE.has(c)) {
                opens.push(c);
            } else if (opens.length === 0 || this.OPEN_TO_CLOSE.get(opens.pop()) !== c) {
                return false
            }
        }
        return opens.length === 0;    
    }
}
