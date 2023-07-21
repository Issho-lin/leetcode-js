/*
 * @Author: linqibin
 * @Date: 2022-11-29 11:22:51
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-29 11:37:55
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1103 lang=javascript
 *
 * [1103] 分糖果 II
 */

// @lc code=start
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    const people = new Array(num_people).fill(0)
    let i = 0, count = 0
    while (candies) {
        count += 1
        if (candies < count) {
            people[i] += candies
            candies = 0
        } else {
            people[i] += count
            candies -= count
        }
        i = (i + 1) % num_people
    }
    return people
};

// @lc code=end

