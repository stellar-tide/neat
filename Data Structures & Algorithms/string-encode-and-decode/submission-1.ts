class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded = '';
        for (const str of strs) {
            encoded += `${str.length}#${str}`;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const decoded: string[] = [];
        let i = 0;

        while(i < str.length) {
            let j = i;
            do {
                j++;
            } while (str[j] !== '#');
            const length = Number.parseInt(str.slice(i, j));
            i = j + 1;
            const decodedStr = str.slice(i, i + length);
            decoded.push(decodedStr);
            i += length;
        }

        return decoded;
    }
}
