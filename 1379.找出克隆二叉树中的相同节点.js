/*
 * @Author: linqibin
 * @Date: 2022-12-05 11:30:56
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-05 11:44:14
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1379 lang=javascript
 *
 * [1379] 找出克隆二叉树中的相同节点
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    var dfs = (root, cRoot) => {
        if (!root) {
            return cRoot
        }
        if (root === target) {
            // console.log(cRoot, target);
            return cRoot
        }
        return dfs(root.left, cRoot.left) || dfs(root.right, cRoot.right)
    }
    return dfs(original, cloned)
};
// @lc code=end

