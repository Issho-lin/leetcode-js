/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const indeg = new Array(numCourses).fill(0)
    const map = {}
    prerequisites.forEach(req => {
        indeg[req[0]]++
        if (map[req[1]]) {
            map[req[1]].push(req[0])
        } else {
            map[req[1]] = [req[0]]
        }
    })
    const queue = []
    indeg.forEach((item, index) => {
        if (!item) {
            queue.push(index)
        }
    })
    const res = []
    while (queue.length) {
        const course = queue.shift()
        res.push(course)
        const toEnd = map[course]
        if (toEnd && toEnd.length) {
            toEnd.forEach(item => {
                if (--indeg[item] === 0) {
                    queue.push(item)
                }
            })
        }
    }
    return res.length === numCourses ? res : []
};
// @lc code=end

