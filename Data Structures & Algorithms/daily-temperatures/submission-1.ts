class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const results = new Array(temperatures.length).fill(0);
        const pastStack = [];

        for (const [currentDay, currentTemp] of temperatures.entries()) {
            while (pastStack.length && currentTemp > temperatures[pastStack.at(-1)]) {
                const past = pastStack.pop();
                results[past] = currentDay - past;
            }
            pastStack.push(currentDay);
        }
        
        return results;
    }
}
