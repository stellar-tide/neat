class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const lower = s.toLowerCase();
        const alpha = lower.split('').filter(this.isAlpha).join('');

        let i = 0;
        let j = alpha.length - 1;

        while (i < j) {
            if (alpha[i] !== alpha[j]) {
                return false;
            }
            i++;
            j--;
        }

        return true;
    }

    isAlpha(s: string): boolean {
        const charCode = s.charCodeAt(0);
        if (charCode >= '0'.charCodeAt(0) && charCode <= '9'.charCodeAt(0)) {
            return true;
        }
        if (charCode >= 'a'.charCodeAt(0) && charCode <= 'z'.charCodeAt(0)) {
            return true;
        }
        return false;
    }
}
