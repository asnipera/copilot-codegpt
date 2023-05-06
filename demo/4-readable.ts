export function ascending(a: number, b: number) {
  if (a == null || b == null) {
    return NaN;
  } else if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return NaN;
  }
}
