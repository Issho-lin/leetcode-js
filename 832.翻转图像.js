/*
 * @Author: linqibin
 * @Date: 2022-11-22 15:55:59
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-22 16:09:30
 * @Description:
 *
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=832 lang=javascript
 *
 * [832] 翻转图像
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    flipAndInvert(image[i]);
  }
  return image;
};
var flipAndInvert = function (data) {
  let left = 0,
    right = data.length - 1;
  while (left < right) {
    [data[left], data[right]] = [data[right], data[left]];
    data[left] = +!data[left];
    data[right] = +!data[right];
    left++
    right--
  }
  if (left === right) {
    data[left] = +!data[left]
  }
};
// @lc code=end
