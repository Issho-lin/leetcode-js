/*
 * @Author: linqibin
 * @Date: 2022-10-19 08:44:25
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-19 08:51:25
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    const arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }
    const dfs = (start, end) => {
        if (start > end) {
            return null
        }
        const mid = (start + end) / 2 >> 0
        const rootVal = arr[mid]
        const root = new TreeNode(rootVal)
        root.left = dfs(start, mid - 1)
        root.right = dfs(mid + 1, end)
        return root
    }
    return dfs(0, arr.length - 1)
};
// @lc code=end

