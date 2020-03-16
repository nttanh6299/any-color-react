export function setGradient(gradient = {}) {
  if (!gradient || (gradient && !gradient.colors)) {
    return null;
  }
  const { colors, deg } = gradient;
  return `linear-gradient(${deg}deg, ${colors})`;
}
