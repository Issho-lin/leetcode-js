/*
 * @lc app=leetcode.cn id=1288 lang=javascript
 *
 * [1288] 删除被覆盖区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    intervals.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1]
        }
        return a[0] - b[0]
    })
    let len = intervals.length, i = 0, cnt = 0
    while (i < len) {
        let j = i + 1
        while (j < len && intervals[i][1] >= intervals[j][1]) {
            cnt++
            j++
        }
        i = j
    }
    return len - cnt
};
// @lc code=end

