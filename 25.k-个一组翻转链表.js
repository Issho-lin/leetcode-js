/*
 * @Author: linqibin
 * @Date: 2022-10-11 17:13:01
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-13 16:48:59
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
var reverseKGroup = function(head, k) {
    const root = new ListNode(-1, head)
    let pre = root
    while (pre) {
        let n = k
        pre.next = reverse(pre.next, n)
        while (n-- && pre) {
            pre = pre.next
        }
    }
    return root.next
};
var reverse = function(head, k) {
    let p = head, cur = head, pre = null, n = k
    while (n--) {
        if (!p) {
            return head
        }
        p = p.next
    }
    while (k--) {
        [cur.next, pre, cur] = [pre, cur, cur.next]
    }
    head.next = cur
    return pre
}
// @lc code=end

