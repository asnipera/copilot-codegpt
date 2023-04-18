import { getMinTwo } from "../demo/1-comment-to-code";
import { describe, it, expect } from "vitest";

describe("1-comment-to-code", () => {
  it("should get min two numbers", () => {
    expect(getMinTwo([1, 2, 3])).toEqual([1, 2]);
    // 再写一个测试用例
    expect(getMinTwo([1, 2, 3, 4])).toEqual([1, 2]);
    // 再写一个数组中是三位数的测试用例
    expect(getMinTwo([100, 200, 300])).toEqual([100, 200]);
    // 再写一个数组中是负数的测试用例
    expect(getMinTwo([-1, -2, -3])).toEqual([-3, -2]);
    // 再写一个数组中是负数和正数的测试用例
    expect(getMinTwo([-1, 2, -3])).toEqual([-3, -1]);
  });
});
