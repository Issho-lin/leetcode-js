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
    if (!head) {
        return null
    }
    let root = new ListNode(-1, head)
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
var reverse = function(head, n) {
    let cur = head
    let pre = null
    let  p = head
    let k = n
    while (k--) {
        if (!p) {
            return head
        }
        p = p.next
    }
    while (n--) {
        [cur.next, pre, cur] = [pre, cur, cur.next]
    }
    head.next = cur
    return pre
}
// @lc code=end

