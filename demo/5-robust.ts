function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new TypeError("Arguments must be numbers");
  }

  return x + y;
}
