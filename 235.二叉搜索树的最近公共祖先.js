/*
 * @Author: linqibin
 * @Date: 2022-10-31 10:56:49
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-31 11:13:55
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // while (root) {
    //     if (root.val < p.val && root.val < q.val) {
    //         root = root.right
    //     } else if (root.val > p.val && root.val > q.val) {
    //         root = root.left
    //     } else {
    //         return root
    //     }
    // }
    if (!root) {
        return root
    }
    if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q)
    } else if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q)
    } else {
        return root
    }
};
// @lc code=end

