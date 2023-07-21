/*
 * @Author: linqibin
 * @Date: 2022-10-21 14:53:58
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-21 15:08:36
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    /**
     * 思路：
     * 1.利用快慢指针找到中间节点
     * 2.从中间节点断开，拆成前后两条链表
     * 3.将后一条链表进行倒序翻转
     * 4.将两条链表的节点依次合并
     */
    let p = head, q = head
    // 找到中间节点
    while (q && q.next) {
        p = p.next
        q = q.next.next
    }
    // 链表断开
    q = p.next
    p.next = null
    p = head
    // 将链表q翻转
    let cur = q, pre = null
    while (cur) {
        [cur.next, pre, cur] = [pre, cur, cur.next]
    }
    q = pre
    // 合并
    const h = new ListNode(-1, p)
    while (q) {
        const p_next = p.next
        const q_next = q.next
        p.next = q
        q.next = p_next
        q = q_next
        p = p_next
    }
    return h.next
};
// @lc code=end

