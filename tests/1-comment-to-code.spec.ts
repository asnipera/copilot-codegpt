import { getMin } from "../demo/1-comment-to-code";
import { describe, it, expect } from "vitest";

describe("1-comment-to-code", () => {
  it("should get min two numbers", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = getMin(arr);
    expect(result).toEqual([1, 2]);
  });

  // 给我写一个三位数数组的测试用例
  it("should get min two numbers", () => {
    const arr = [100, 200, 300, 400, 500];
    const result = getMin(arr);
    expect(result).toEqual([100, 200]);
  });
});
