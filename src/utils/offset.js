export function offset(e, direction = 'top') {
  let el = e;
  let x = direction === 'left' ? e.offsetLeft : e.offsetTop;
  while (el.offsetParent) {
    x +=
      direction === 'left'
        ? el.offsetParent.offsetLeft
        : el.offsetParent.offsetTop;
    el = el.offsetParent;
  }

  return x;
}
