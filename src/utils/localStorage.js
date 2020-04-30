import { LOCALSTORAGE_KEY } from '../constants/GlobalConstants';

export function getLocalStorage() {
  try {
    const serializedData = window.localStorage.getItem(LOCALSTORAGE_KEY);
    if (!serializedData) {
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (e) {
    return undefined;
  }
}

export function setLocalStorage(data) {
  try {
    const serializedData = JSON.stringify({
      settings: {
        ...data
      }
    });
    window.localStorage.setItem(LOCALSTORAGE_KEY, serializedData);
  } catch (e) {
    console.log('Set local storage failed');
  }
}
