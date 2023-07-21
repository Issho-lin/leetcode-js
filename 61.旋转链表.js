/*
 * @Author: linqibin
 * @Date: 2022-10-14 08:59:31
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-14 09:52:46
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head) {
        return head
    }
    let p = head, q = head
    while (k--) {
        p = p.next
        if (!p) {
            p = head
        }
    }
    if (p === q) {
        return head
    }
    while (p && p.next) {
        p = p.next
        q = q.next
    }
    let cur = q.next
    q.next = null
    p.next = head
    return cur
};
// @lc code=end

