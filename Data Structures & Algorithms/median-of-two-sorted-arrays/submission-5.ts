class Solution {
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        if (nums1.length > nums2.length) return this.findMedianSortedArrays(nums2, nums1);
        const m = nums1.length;
        const n = nums2.length;
        const half = Math.floor((m + n + 1) / 2);
        let l = 0;
        let r = m;

        if (half - l >= 0 && half - l <= n && this.isValid(nums1, nums2, l, half - l, m, n)) return this.getMedian(nums1, nums2, l, half - l, m, n);
        if (half - r >= 0 && half - r <= n && this.isValid(nums1, nums2, r, half - r, m, n)) return this.getMedian(nums1, nums2, r, half - r, m, n);

        while (r - l > 1) {
            const i = Math.floor((l + r) / 2);
            const j = half - i;
            if (this.isBefore(nums1, nums2, i, j)) {
                l = i;
            } else {
                r = i;
            }
        }

        return this.getMedian(nums1, nums2, r, half - r, m, n);
    }

    isValid(nums1: number[], nums2: number[], i: number, j: number, m: number, n: number): boolean {
        const nums1LeftOk = i === 0 || j === n || nums1[i - 1] <= nums2[j];
        const nums2LeftOk = j === 0 || i === m || nums2[j - 1] <= nums1[i];
        return nums1LeftOk && nums2LeftOk;
    }

    isBefore(nums1: number[], nums2: number[], i: number, j: number): boolean {
        if (j < 0) return true;
        if (i === 0) return false;
        if (j === nums2.length) return false;
        if (nums2[j - 1] > nums1[i]) return true;
        return nums1[i - 1] > nums2[j];
    }

    getMedian(nums1: number[], nums2: number[], i: number, j: number, m: number, n: number): number {
        const maxLeft = Math.max(
            i === 0 ? -Infinity : nums1[i - 1],
            j === 0 ? -Infinity : nums2[j - 1]
        );

        if ((m + n) % 2 === 1) return maxLeft;

        const minRight = Math.min(
            i === m ? Infinity : nums1[i],
            j === n ? Infinity : nums2[j]
        );

        return (maxLeft + minRight) / 2;
    }
}