import { ref } from "vue";

const getItem = (key: string, storage: Storage) => {
  const value = storage.getItem(key);
  if (!value) {
    return null;
  }
  try {
    return JSON.parse(value);
  } catch (error) {
    return value;
  }
};

export const useStorage = (key: string, type = "session") => {
  let storage;
  switch (type) {
    case "session":
      storage = sessionStorage;
      break;
    case "local":
      storage = localStorage;
      break;
    default:
      storage = localStorage;
  }
  const value = ref(getItem(key, storage));
  const setItem = (storage: Storage) => {
    return (newValue: never) => {
      value.value = newValue;
      storage.setItem(key, JSON.stringify(newValue));
    };
  };
  return [value.value, setItem(storage)];
};
