function fallbackCopyTextToClipboard(text) {
  const textArea = document.createElement('textarea');

  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = '0';
  textArea.style.left = '0';
  textArea.style.position = 'fixed';

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  let successful = false;
  try {
    successful = document.execCommand('copy');
  } catch (err) {
    console.log('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);

  return successful;
}

export async function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    return fallbackCopyTextToClipboard(text);
  }
  return navigator.clipboard
    .writeText(text)
    .then(() => true)
    .catch(() => false);
}
