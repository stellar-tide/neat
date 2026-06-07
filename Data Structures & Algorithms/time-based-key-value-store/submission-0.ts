class TimeMap {
    keyStore: Map<string, [number, string][]>;

    constructor() {
        this.keyStore = new Map<string, [number, string][]>();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        const timestamps = this.keyStore.get(key) || [];
        timestamps.push([timestamp, value]);
        this.keyStore.set(key, timestamps);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        const timestamps = this.keyStore.get(key);
        if (timestamps === undefined) return '';

        let l = 0;
        let r = timestamps.length - 1;

        if (!this.isBefore(timestamps, l, timestamp)) return '';
        if (this.isBefore(timestamps, r, timestamp)) return timestamps[r][1];

        while (r - l > 1) {
            const mid = Math.floor((l + r) / 2);
            if (this.isBefore(timestamps, mid, timestamp)) {
                l = mid;
            } else {
                r = mid;
            }
        }
        return timestamps[l][1];
    }

    isBefore(timestamps: [number, string][], i: number, target: number): boolean {
        return timestamps[i][0] <= target;
    }
}
