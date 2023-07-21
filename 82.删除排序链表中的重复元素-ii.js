/*
 * @Author: linqibin
 * @Date: 2022-10-17 18:38:08
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-17 18:53:13
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function(head) {
    const h = new ListNode(-1, head)
    let p = h, q = h.next
    while (q && q.next) {
        if (p.next.val !== q.next.val) {
            p = p.next
            q = q.next
        } else {
            while (q.next && p.next.val === q.next.val) {
                q = q.next
            }
            p.next = q.next
            q = q.next
        }
    }
    return h.next
};
// @lc code=end

