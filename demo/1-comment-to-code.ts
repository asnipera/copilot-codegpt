//写一个函数，获取数组中的最小的两个值
export function getMinTwo(arr: number[]) {
  //获取最小值
  const min = Math.min(...arr);
  //获取最小值的索引
  const minIndex = arr.indexOf(min);
  //删除最小值
  arr.splice(minIndex, 1);
  //获取第二小的值
  const minTwo = Math.min(...arr);
  return [min, minTwo];
}
