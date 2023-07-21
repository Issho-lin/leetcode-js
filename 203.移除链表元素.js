/*
 * @Author: linqibin
 * @Date: 2022-10-27 10:28:00
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-27 10:35:51
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (!head) {
        return head
    }
    const root = new ListNode(-1, head)
    let p = root, q = root.next
    while (q) {
        while (q && q.val === val) {
            q = q.next
        }
        p.next = q
        p = p.next
        if (q) {
            q = q.next
        }
    }
    return root.next
};
// @lc code=end

