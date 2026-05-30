class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const DAY = 0;
        const TEMP = 1;
        const results = new Array(temperatures.length).fill(0);
        const pastStack = [];

        for (const current of temperatures.entries()) {
            while (pastStack.length && current[TEMP] > pastStack.at(-1)[TEMP]) {
                const past = pastStack.pop();
                results[past[DAY]] = current[DAY] - past[DAY];
            }
            pastStack.push(current);
        }
        
        return results;
    }
}
