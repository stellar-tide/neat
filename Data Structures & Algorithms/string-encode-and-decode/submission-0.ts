class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        const encodedStrs = strs.map(this.encodeStr);
        return JSON.stringify(encodedStrs);
    }

    encodeStr(str: string): number[] {
        if (str === '') return [];
        return str.split('').map(c => c.charCodeAt(0));
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const chars2dArray = JSON.parse(str);
        return chars2dArray.map(this.decodeStr);
    }

    decodeStr(chars: number[]): string {
        if (chars.length === 0) return '';
        return chars.map(c => String.fromCharCode(c)).join('');
    }
}
