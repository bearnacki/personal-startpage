export const getLocalStorageData = (localStorageKey) => {
  const localData = typeof window !== 'undefined' && window.localStorage.getItem(localStorageKey);
  return localData ? JSON.parse(localData) : [];
}

export const setLocalStorageData = (localStorageKey, localData) => {
  typeof window !== 'undefined' && window.localStorage.setItem(localStorageKey, JSON.stringify(localData));
}