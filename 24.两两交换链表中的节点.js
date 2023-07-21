/*
 * @Author: linqibin
 * @Date: 2022-10-11 17:10:37
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-13 16:02:11
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function(head) {
    const root = new ListNode(-1, head)
    let h = root
    while (h.next && h.next.next) {
        let p = h.next, q = h.next.next
        h.next = q
        p.next = q.next
        q.next = p
        h = p
    }
    return root.next
};
// @lc code=end

