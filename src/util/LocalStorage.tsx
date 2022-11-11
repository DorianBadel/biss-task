import { useState, useEffect } from "react";

type ReturnType<T> = [T, React.Dispatch<React.SetStateAction<T>>];

//<T extends {}>     -> generic
export const useLocalStorage = <T extends {}>(
  key: string,
  initialValue?: T
): ReturnType<T> => {
  const [state, setState] = useState<T>(() => {
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
  }, [state]);

  return [state, setState];
};
