/*
 * @Author: linqibin
 * @Date: 2022-10-28 09:47:27
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-28 14:39:07
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
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
    const map = new Map()
    const indeg = new Array(numCourses).fill(0)
    for (let i = 0; i < prerequisites.length; i++) {
        const req = prerequisites[i]
        // 入度
        indeg[req[0]]++
        map.set(req[1], [...(map.get(req[1]) || []), req[0]])
    }
    let count = 0
    const queue = []
    // 先把入度为0的添加进队列
    for (let i = 0; i < indeg.length; i++) {
        if (indeg[i] === 0) {
            queue.push(i)
        }
    }
    while (queue.length) {
        const course = queue.shift()
        count++
        const canFinish = map.get(course)
        if (canFinish?.length > 0) {
            canFinish.forEach(item => {
                // 把相关入度-1
                indeg[item]--
                if (indeg[item] === 0) {
                    queue.push(item)
                }
            })
        }
    }
    return count === numCourses
};
// @lc code=end

