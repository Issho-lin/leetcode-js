/*
 * @Author: linqibin
 * @Date: 2022-10-31 11:45:49
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-31 11:54:09
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
    // 搜索左右子树，直到找到 p 或 q，如果有一边查到底都找不到，那就一定在另一边，如果p，q刚好分布在两边，那么该节点就是最近公共祖先
    if (!root || root === p || root === q) {
        return root
    }
    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p, q)
    // 如果左边找不到，那么一定在右边
    if (!left) {
        return right
    }
    // 如果右边找不到，那么一定在左边
    if (!right) {
        return left
    }
    // 如果刚好就在左右两边，那就是了
    return root
};
// @lc code=end

