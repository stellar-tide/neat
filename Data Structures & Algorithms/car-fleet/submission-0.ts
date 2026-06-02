class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const sortedIndices = Array.from(position.entries()).sort((a, b) => b[1] - a[1]).map(([index, _]) => index);
        const timesToTarget = sortedIndices.map(i => (target - position[i]) / speed[i]);
        const fleetsStack = [];

        for (const time of timesToTarget) {
            if (fleetsStack.length === 0 || fleetsStack.at(-1) < time) {
                fleetsStack.push(time);
            }
        }
        
        return fleetsStack.length;
    }
}
