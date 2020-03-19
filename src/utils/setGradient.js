/*
background: #FFF; //fallback
background: linear-gradient(180deg, #FFF, #000);
background: -webkit-linear-gradient(180deg, #FFF, #000);
background: -o-linear-gradient(180deg, #FFF, #000);
*/

/*
    gradient:
        color: ['#FFF', 'F000'],
        deg: 100deg
*/
export function setGradient(
  gradient = {},
  prefix = false,
  fallback = false,
  attrName = false,
  semicolon = false
) {
  if (!gradient || (gradient && !gradient.colors)) {
    return null;
  }
  const { colors, deg } = gradient;
  let result = [];
  if (fallback) {
    result.push(`${colors[0].color}`);
  }
  result.push(
    `linear-gradient(${deg}deg,${colors.map(
      item => `${item.color} ${item.stop}%`
    )})`
  );
  console.log(result);

  if (prefix) {
    const prefixes = ['-webkit-', '-o-'];
    for (let i = 0; i < prefixes.length; i++) {
      result.push(`${prefixes[i]}linear-gradient(${deg}deg,${colors})`);
    }
  }

  if (attrName) {
    result = result.map(value => `background: ${value}`);
  }

  if (semicolon) {
    result = result.map(value => `${value};`);
  }

  return result.join('\n');
}
