class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let l = 1;
        let r = Math.max(...piles);
        if (!this.isBefore(piles, h, l)) return l;

        while (r - l > 1) {
            const mid = Math.floor((l + r) / 2);
            if (this.isBefore(piles, h, mid)) {
                l = mid;
            } else {
                r = mid;
            }
        }
        return r;
    }

    isBefore(piles: number[], h: number, k: number): boolean {
        let hoursNeeded = 0;
        for (const pile of piles) {
            hoursNeeded += Math.ceil(pile / k);
        }
        return hoursNeeded > h;
    }
}
