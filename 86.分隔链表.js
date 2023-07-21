/*
 * @Author: linqibin
 * @Date: 2022-10-17 18:56:35
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-18 08:42:23
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if (!head) {
        return head
    }
    const big = new ListNode(-1), small = new ListNode(-1)
    let bp = big, sp = small, cur = head, next = head.next
    while (cur) {
        cur.next = null
        if (cur.val < x) {
            sp.next = cur
            sp = sp.next
        } else {
            bp.next = cur
            bp = bp.next
        }
        cur = next
        if (next) {
            next = next.next
        }
    }
    sp.next = big.next
    return small.next
};
// @lc code=end

