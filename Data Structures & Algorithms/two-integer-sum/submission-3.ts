class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const complements = new Map(nums.map((n, i) => [target - n, i]));
        for (const [index, num] of nums.entries()) {
            if (complements.has(num) && index !== complements.get(num)) {
                return [index, complements.get(num)];
            }
        }
    }
}

/** alg:
 *   - compute complements map           [ n space, n time ]
 *      - map: { complement -> index }
 *      - complement = target - num
 *   - for num, index of nums                     [ n time ]
 *      - if num in map and index !== map[num]
 *          - return index, map[num]
 */

/** example 1
 * 
 * nums:        3, 4, 5, 6
 * target:      7
 * complements: 4, 3, 2, 1
 * map: { 4 -> 0, 3 -> 1, ... }
 * 
 * 3 in map
 * return [0, 1]
 */

/** example 3
 * 
 * nums:        5, 5
 * target:      10
 * complements: 5, 5
 * map: { 5 -> 1 }
 * 
 * 5 in map
 * return [0, 1]
 */

/** test case 15 
 * 
 * nums:        1, 3, 4, 2
 * target:      6
 * complements: 5, 3, 2, 4
 * map: { 5 -> 0, 3 -> 1, 2 -> 2, 4 -> 3 }
 * 
 * 5 in map
 * return [0, 1]
 */