/*
 * @Author: linqibin
 * @Date: 2022-11-01 10:22:45
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-01 10:40:36
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=274 lang=javascript
 *
 * [274] H 指数
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    // 百度百科的公式：要确定一个人的h指数非常容易，到SCI网站，查出某个人发表的所有SCI论文，让其按被引次数从高到低排列，往下核对，直到某篇论文的序号大于该论文被引次数
    let h = 1
    citations.sort((a, b) => b - a)
    while (h <= citations.length &&  h <= citations[h - 1]) {
        h++
    }
    return h - 1
};
// @lc code=end

