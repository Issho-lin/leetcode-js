/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const map = {}
    arr1.forEach(item => {
        if (map[item]) {
            map[item]++
        } else {
            map[item] = 1
        }
    })
    const res = []
    arr2.forEach(item => {
        while (map[item]--) {
            res.push(item)
        }
    })
    arr1.filter(item => !arr2.includes(item)).sort((a, b) => a - b).forEach(item => res.push(item))
    return res
};
// @lc code=end

