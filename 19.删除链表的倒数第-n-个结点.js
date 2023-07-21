/*
 * @Author: linqibin
 * @Date: 2022-10-11 09:55:00
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-13 15:36:59
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const h = new ListNode(-1, head)
    let p = h, q = h
    while (n-- && q.next) {
        q = q.next
    }
    while (q.next) {
        p = p.next
        q = q.next
    }
    p.next = p.next.next
    return h.next
};
// @lc code=end

