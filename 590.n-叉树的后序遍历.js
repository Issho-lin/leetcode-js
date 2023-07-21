/*
 * @Author: linqibin
 * @Date: 2022-11-15 11:35:39
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-15 11:36:54
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    const ans = []
    order(root, ans)
    return ans
};
var order = function(root, ans) {
    if (!root) {
        return
    }
    root.children.forEach(child => {
      order(child, ans)  
    })
    ans.push(root.val)
}
// @lc code=end

