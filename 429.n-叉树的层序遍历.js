/*
 * @Author: linqibin
 * @Date: 2022-11-09 08:44:39
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-09 08:51:50
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const ans = []
    dfs(root, 0, ans)
    return ans
};
var dfs = function(root, k, ans) {
    if (!root) {
        return
    }
    if (!ans[k]) {
        ans[k] = []
    }
    ans[k].push(root.val)
    root.children.forEach(child => {
        dfs(child, k + 1, ans)
    })
}
// @lc code=end

