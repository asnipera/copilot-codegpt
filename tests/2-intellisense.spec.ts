import { getUser, remove, update, add } from "../demo/2-intellisense";
import { describe, it, expect } from "vitest";

describe("1-comment-to-code", () => {
  // test add function
  it("should add user", () => {
    add({ ID: "1", Name: "user1" });
    expect(getUser("1")).toEqual({ ID: "1", Name: "user1" });
  });

  // test update function
  it("should update user", () => {
    add({ ID: "1", Name: "user1" });
    update({ ID: "1", Name: "user1-updated" });
    expect(getUser("1")).toEqual({ ID: "1", Name: "user1-updated" });
  });

  // test remove function
  it("should remove user", () => {
    add({ ID: "1", Name: "user1" });
    remove("1");
    expect(getUser("1")).toEqual(undefined);
  });

  // test getUser function
  it("should get user", () => {
    add({ ID: "1", Name: "user1" });
    expect(getUser("1")).toEqual({ ID: "1", Name: "user1" });
  });
});
