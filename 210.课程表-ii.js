/*
 * @Author: linqibin
 * @Date: 2022-10-28 14:14:42
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-28 14:51:29
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
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
    const map = new Map()
    const indeg = new Array(numCourses).fill(0)
    for (const req of prerequisites) {
        indeg[req[0]]++
        map.set(req[1], [...(map.get(req[1]) || []), req[0]])
    }
    const queue = []
    for (let i = 0; i < indeg.length; i++) {
        if (indeg[i] === 0) {
            queue.push(i)
        }
    }
    const stack = []
    while (queue.length) {
        const course = queue.shift()
        stack.push(course)
        const canFinish = map.get(course)
        if (canFinish?.length > 0) {
            canFinish.forEach(item => {
                if (--indeg[item] === 0) {
                    queue.push(item)
                }
            })
        }
    }
    return stack.length === numCourses ? stack : []
};
// @lc code=end

