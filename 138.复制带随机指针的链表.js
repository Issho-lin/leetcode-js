/*
 * @Author: linqibin
 * @Date: 2022-10-21 11:24:26
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-21 11:46:01
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let p = head
    while (p) {
        // 复制每一个节点，并连接到原节点后面
        // 即：A->B->C->null 变成 A->A'->B->B'->C->C'->null
        let q = new Node(p.val, p.next)
        p.next = q
        p = q.next
    }
    // 根据原节点与复制节点前后相连的位置关系，连接复制节点的random指针
    p = head
    while (p) {
        p.next.random = p.random ? p.random.next : null
        p = p.next.next
    }
    // 拆分原链表与复制链表
    const h = new Node(-1, head)
    let cur = h
    p = head
    while (p) {
        cur.next = p.next
        cur = cur.next
        p.next = cur.next
        p = p.next
    }
    cur.next = null
    return h.next
};
// @lc code=end

