/*
 * @Author: linqibin
 * @Date: 2022-10-18 09:13:19
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-18 09:23:59
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    const h = new ListNode(-1, head)
    let p = h, count = left
    while (--count) {
        p = p.next
    }
    p.next = reverse(p.next, right - left + 1)
    return h.next
};

var reverse = function (head, k) {
    let pre = null, cur = head
    while (k--) {
        [cur.next, pre, cur] = [pre, cur, cur.next]
    }
    head.next = cur
    return pre
}
// @lc code=end

