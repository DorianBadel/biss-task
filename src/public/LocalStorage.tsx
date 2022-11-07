import { useState, useEffect } from "react";

type ReturnType<T> = [
  T | undefined,
  React.Dispatch<React.SetStateAction<T | undefined>>
];
type User = {
  name: string;
  surname: string;
};

const init: User = {
  name: "ya",
  surname: "mom",
};

//<T extends {}>     -> generic
export const useLocalStorage = <T extends {}>(
  key: string,
  initialValue?: T
): ReturnType<T> => {
  const [state, setState] = useState<T | undefined>(() => {
    if (!initialValue) return;
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (err) {
      return initialValue;
    }
  });

  useEffect(() => {
    if (state) {
      try {
        localStorage.setItem(key, JSON.stringify(state));
      } catch (err) {
        console.log(err);
      }
    }
  }, [state, key]);

  return [state, setState];
};
