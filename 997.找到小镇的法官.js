/*
 * @Author: linqibin
 * @Date: 2022-11-24 18:34:45
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-24 18:49:28
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=997 lang=javascript
 *
 * [997] 找到小镇的法官
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if (n === 1 && !trust.length) {
        return 1
    }
    // 把被信任的人当成法官候选
    const set = new Set()
    for (const [_, item] of trust) {
        set.add(item)
    }
    // 把相信别人的候选人剔除
    for (const [item] of trust) {
        if (set.has(item)) {
            set.delete(item)
        }
    }
    if (!set.size) {
        return -1
    }
    // 信任候选人的人数必须达到 n - 1
    let cnt = 0
    for (const item of [...set]) {
        for (const [_, t] of trust) {
            if (t === item) {
                cnt++
                if (cnt === n - 1) {
                    return item
                }
            }
        }
        cnt = 0
    }
    return -1
};
// @lc code=end

