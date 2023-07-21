/*
 * @Author: linqibin
 * @Date: 2022-11-02 11:29:12
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-02 11:42:19
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const arr = s.split('')
    let left = 0, right = s.length - 1
    while (left < right) {
        if (isVowel(s[left]) && isVowel(s[right])) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
            right--
        } else if (isVowel(s[left])) {
            right--
        } else if (isVowel(s[right])) {
            left++
        } else {
            left++
            right--
        }
    }
    return arr.join('')
};
var isVowel = function(char) {
    const lowerChar = char.toLowerCase()
    const vowel = ['a', 'e', 'i', 'o', 'u']
    return vowel.includes(lowerChar)
}

reverseVowels("hello")
// @lc code=end

