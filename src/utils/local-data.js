export const getLocalStorageData = (localStorageKey) => {
  const localData = localStorage.getItem(localStorageKey);
  return localData ? JSON.parse(localData) : [];
}

export const setLocalStorageData = (localStorageKey, localData) => {
  localStorage.setItem(localStorageKey, JSON.stringify(localData));
}