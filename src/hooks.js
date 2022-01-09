import { useState } from 'react';
const useLocalStorage = (key, defaultValue) => {
  const getInitiaValue = () => localStorage.getItem(key) ?? defaultValue;
  const [value, setValue] = useState(getInitiaValue);
  const setAndStoreValue = (value) => {
    localStorage.setItem(key, value);
    setValue(value);
  };
  return [value, setAndStoreValue];
};

export default useLocalStorage;
