/*
 * @Author: linqibin
 * @Date: 2022-12-01 18:53:41
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-02 17:21:10
 * @Description:
 *
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=1275 lang=javascript
 *
 * [1275] 找出井字棋的获胜者
 */

// @lc code=start
/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
  const A = [],
    B = [];
  for (let i = 0; i < moves.length; i++) {
    if (i % 2 === 0) {
      // A
      if (checkWin(A, moves[i])) {
        return 'A'
      }
    } else {
      // B
      if (checkWin(B, moves[i])) {
        return 'B'
      }
    }
  }
  const lenA = A.length,
    lenB = B.length;
  if (lenA + lenB === 9) {
    return "Draw";
  }
  return "Pending";
};

var checkWin = function(map, [x, y]) {
    map.push([x, y])
    if (map.length < 3) {
        return false
    }
    let sameRow = 0, sameCol = 0, sameLeft = 0, sameRight = 0
    for (const [a, b] of map) {
        if (a === x) {
            sameRow++
            if (sameRow === 3) {
                return true
            }
        }
        if (b === y) {
            sameCol++
            if (sameCol === 3) {
                return true
            }
        }
        if (a + b === 2) {
            sameLeft++
            if (sameLeft === 3) {
                return true
            }
        }
        if (a - b === 0) {
            sameRight++
            if (sameRight === 3) {
                return true
            }
        }
    }
    return false
}
// @lc code=end
