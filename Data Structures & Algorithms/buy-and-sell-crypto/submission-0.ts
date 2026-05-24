class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let buy = 0;
        let sell = 0;
        let best = 0;

        while (sell < prices.length - 1) {
            if (prices[sell] < prices[buy]) {
                buy = sell;
            } else {
                sell++;
            }
            best = Math.max(best, prices[sell] - prices[buy]);
        }

        return best;
    }
}
