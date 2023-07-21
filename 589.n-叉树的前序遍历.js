/*
 * @Author: linqibin
 * @Date: 2022-11-15 11:32:32
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-15 11:35:24
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const ans = []
    order(root, ans)
    return ans
};
var order = function(root, ans) {
    if (!root) {
        return
    }
    ans.push(root.val)
    root.children.forEach(child => {
        order(child, ans)
    })
}
// @lc code=end

