import { add, getUserInfo } from '../demo/4-unitTest';
import { describe, it, expect } from 'vitest';

describe('add', () => {
  // 两个数字相加
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });

  // 测试两个五位数相加的情况
  it('should add two five-digit numbers', () => {
    expect(add(10000, 20000)).toBe(30000);
  });
});

// 测试 getUserInfo
describe('getUserInfo', () => {
  it('should get user info', () => {
    const user = {
      ID: '123',
      Name: 'zhangsan',
      Dept: {
        DeptName: '技术部',
        DeptId: 1,
      },
    };
    expect(getUserInfo(user, 'Dept.DeptName')).toBe('技术部');
    // 再写一个测试用例
    expect(getUserInfo(user, 'Dept.DeptId')).toBe(1);
    // 再写一个测试用例
  });
});
