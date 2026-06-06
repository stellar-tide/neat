class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const ROWS = matrix.length;
        const COLS = matrix[0].length
        let l = 0;
        let r = (ROWS * matrix[0].length) - 1;
        const start = matrix[0][0];
        const end = matrix[ROWS - 1][COLS - 1];
        if (!this.isBefore(start, target)) return false;
        if (this.isBefore(end, target)) return end === target;

        while (r - l > 1) {
            const mid = Math.floor((l + r) / 2);
            const midRow = Math.floor(mid / COLS);
            const midCol = mid % COLS;
            if (this.isBefore(matrix[midRow][midCol], target)) {
                l = mid;
            } else {
                r = mid;
            }
        }
        const lRow = Math.floor(l / COLS);
        const lCol = l % COLS;
        return matrix[lRow][lCol] === target;
    }

    isBefore(val: number, target: number): boolean {
        return val <= target;
    }
}
