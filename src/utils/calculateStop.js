export function calculateStop(max, length, point) {
  return Math.ceil((point * max) / (length - 1));
}
