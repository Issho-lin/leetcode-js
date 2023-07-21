/*
 * @Author: linqibin
 * @Date: 2022-10-27 17:49:08
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-31 15:49:52
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let h = new ListNode(-1)
    let p = head, q = h
    // 复制链表
    while (p) {
        q.next = new ListNode(p.val)
        p = p.next
        q = q.next
    }
    q = h.next
    // 翻转链表
    let pre = null, cur = q
    while (cur) {
        [cur.next, pre, cur] = [pre, cur, cur.next]
    }
    p = head
    q = pre
    // 链表节点对照
    while (p) {
        if (p.val !== q.val) {
            return false
        }
        p = p.next
        q = q.next
    }
    return true
};
// @lc code=end

