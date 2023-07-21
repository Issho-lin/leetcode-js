/*
 * @Author: linqibin
 * @Date: 2022-11-22 17:54:23
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-22 17:55:50
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let fast = head, slow = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }
    return slow
};
// @lc code=end

