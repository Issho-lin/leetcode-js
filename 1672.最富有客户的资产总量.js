/*
 * @Author: linqibin
 * @Date: 2022-12-16 14:26:31
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-16 14:27:24
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1672 lang=javascript
 *
 * [1672] 最富有客户的资产总量
 */

// @lc code=start
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    return Math.max(...accounts.map(item => item.reduce((a, b) => a + b)))
};
// @lc code=end

