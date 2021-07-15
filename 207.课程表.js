/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const indeg = new Array(numCourses).fill(0)
    const map = {}
    for (let i = 0; i < prerequisites.length; i++) {
        const req = prerequisites[i]
        indeg[req[0]]++
        if (map[req[1]]) {
            map[req[1]].push(req[0])
        } else {
            map[req[1]] = [req[0]]
        }
    }
    const queue = []
    for (let i = 0; i < indeg.length; i++) {
        if (indeg[i] === 0) {
            queue.push(i)
        }
    }
    let cnt = 0
    while (queue.length) {
        const course = queue.shift()
        cnt++
        const toEnd = map[course]
        if (toEnd && toEnd.length) {
            toEnd.forEach(item => {
                if (--indeg[item] === 0) {
                    queue.push(item)
                }
            })
        }
    }
    return cnt === numCourses
};
// @lc code=end

