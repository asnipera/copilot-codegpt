export function ascending(a: number, b: number) {
  return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : NaN;
}
