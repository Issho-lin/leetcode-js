/*
 * @Author: linqibin
 * @Date: 2022-11-15 11:38:53
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-15 11:54:33
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) {
        return 0
    }
    const queue = [root]
    let depth = 0
    while (queue.length) {
        let { length } = queue
        depth++
        while (length--) {
            const node = queue.shift()
            if (node.children) {
                node.children.forEach(child => {
                    queue.push(child)
                })
            }
        }
    }
    return depth
};
// @lc code=end

