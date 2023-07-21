/*
 * @Author: linqibin
 * @Date: 2022-11-16 18:43:46
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-16 18:47:14
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const map = new Map()
    for (let i = 0; i < list1.length; i++) {
        map.set(list1[i], i)
    }
    let min = Infinity, stack = []
    for (let i = 0; i < list2.length; i++) {
        if (!map.has(list2[i])) {
            continue
        }
        const idx = map.get(list2[i])
        const sum = idx + i
        if (sum < min) {
            min = sum
            stack = [list2[i]]
        } else if (sum === min) {
            stack.push(list2[i])
        }
    }
    return stack
};
// @lc code=end

