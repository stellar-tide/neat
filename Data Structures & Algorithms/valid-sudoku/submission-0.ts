class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    K = 9;
    GRID_SIZE = 3;
    EMPTY = '.';
    VALID = new Set(['.', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
    
    isValidSudoku(board: string[][]): boolean {
        const rowsSeen: Set<string>[] = new Array(this.K).fill(0).map(() => new Set());
        const colsSeen: Set<string>[] = new Array(this.K).fill(0).map(() => new Set());
        const gridsSeen: Set<string>[] = new Array(this.K).fill(0).map(() => new Set());

        for (let i = 0; i < this.K; i++) {
            for (let j = 0; j < this.K; j++) {
                const z = this.calculateSubgrid(i, j);
                const val = board[i][j];
                if (!this.VALID.has(val)) {
                    return false;
                }
                if (rowsSeen[i].has(val) || colsSeen[j].has(val) || gridsSeen[z].has(val)) {
                    return false;
                }
                if (val !== this.EMPTY) {
                    rowsSeen[i].add(val);
                    colsSeen[j].add(val);
                    gridsSeen[z].add(val);
                }
            }
        }
        return true;
    }

    calculateSubgrid(i: number, j: number): number {
        return (
            Math.floor(i / this.GRID_SIZE) * this.GRID_SIZE 
            + Math.floor(j / this.GRID_SIZE)
        );
    }
}
