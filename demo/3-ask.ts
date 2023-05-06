// q: someLogicFunction是用来干嘛的？
// a: 找到最长的递增子序列
function someLogicFunction(arr: number[]) {
  let longestSubsequence: number[] = [];
  let currentSubsequence: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      // q: currentSubsequence是用来干什么的？
      // a: 用来存储当前的递增子序列
      currentSubsequence.push(arr[i]);
    } else {
      if (currentSubsequence.length > longestSubsequence.length) {
        longestSubsequence = currentSubsequence;
      }
      currentSubsequence = [arr[i]];
    }
  }
  return longestSubsequence;
}
