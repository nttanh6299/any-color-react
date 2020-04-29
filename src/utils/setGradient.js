/*
background: #FFF; //fallback
background: linear-gradient(180deg, #FFF, #000);
background: -webkit-linear-gradient(180deg, #FFF, #000);
background: -o-linear-gradient(180deg, #FFF, #000);
*/

/*
    gradient:
        colors: [{ color: '#FFF', stop: 0 }],
        deg: 100deg
*/

function setValues(colors) {
  const copyArr = [].concat(colors);

  return copyArr
    .sort((left, right) => left.stop - right.stop)
    .map(item => `${item.color} ${item.stop}%`);
}

function setAttributeName(colors, attrName) {
  if (!attrName) {
    return colors;
  }
  return colors.map(color => `background: ${color}`);
}

function setSemicolon(colors, semicolon) {
  if (!semicolon) {
    return colors;
  }
  return colors.map(color => `${color};`);
}

function setIfPrefix(colors, deg, prefix) {
  const result = [];
  if (prefix) {
    const prefixes = ['-webkit-', '-o-'];
    for (let i = 0; i < prefixes.length; i++) {
      result.push(`${prefixes[i]}linear-gradient(${deg}deg, ${colors})`);
    }
  }
  result.push(`linear-gradient(${deg}deg, ${colors})`);
  return result;
}

function setIfFallback(color, fallback) {
  if (!fallback) {
    return [];
  }
  return [color];
}

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

  return setSemicolon(
    setAttributeName(
      setIfFallback(colors[0].color, fallback).concat(
        setIfPrefix(setValues(colors), deg, prefix)
      ),
      attrName
    ),
    semicolon
  ).join('\n');
}
