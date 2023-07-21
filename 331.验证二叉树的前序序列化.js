/*
 * @Author: linqibin
 * @Date: 2022-11-02 09:42:31
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-02 11:01:05
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=331 lang=javascript
 *
 * [331] 验证二叉树的前序序列化
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    const stack = [1], order = preorder.split(',')
    for (let i = 0; i < order.length; i++) {
        if (!stack.length) {
            return false
        }
        if (--stack[stack.length - 1] === 0) {
            stack.pop()
        }
        if (order[i] !== '#') {
            stack.push(2)
        }
    }
    return stack.length === 0
};
// @lc code=end

