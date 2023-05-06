//写一个函数，获取数组中的最小的两个值
export function getMin(arr: number[]): number[] {
  let min1 = arr[0];
  let min2 = arr[1];
  if (min1 > min2) {
    [min1, min2] = [min2, min1];
  }
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] < min1) {
      [min1, min2] = [arr[i], min1];
    } else if (arr[i] < min2) {
      min2 = arr[i];
    }
  }
  return [min1, min2];
}
