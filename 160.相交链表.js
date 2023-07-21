/*
 * @Author: linqibin
 * @Date: 2022-10-24 10:04:23
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-24 10:09:00
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) {
        return null
    }
    let p = headA, q = headB
    while (p !== q) {
        p = p.next
        q = q.next
        // 长度相同的平行链表
        if (!p && !q) {
            return null
        }
        if (!p) {
            p = headB
        }
        if (!q) {
            q = headA
        }
    }
    return p
};
// @lc code=end

