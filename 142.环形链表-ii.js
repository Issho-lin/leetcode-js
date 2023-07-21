/*
 * @Author: linqibin
 * @Date: 2022-10-21 11:52:23
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-21 14:42:03
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    /**
     * Vp = 2Vq
     * Sp = 2Sq
     * Sp = ab + 2bc + cb
     * Sq = ab + bc
     * 2ab + 2bc = ab + 2bc + cb
     * 即：ab = cb
     */
    let p = head, q = head
    while (p && p.next) {
        p = p.next.next
        q = q.next
        if (p === q) {
            p = head
            while (p !== q) {
                p = p.next
                q = q.next
            }
            return p
        }
    }
    return null
};
// @lc code=end

