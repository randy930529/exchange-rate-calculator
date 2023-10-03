import { useDebugValue, useEffect, useState } from "react";

export function useLocalStorage(key: string, initialState: any) {
  const [state, setState] = useState(initialState);
  useDebugValue(state);

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item) setState(parse(item));
  }, [key]);

  useEffect(() => {
    if (state) {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [state, key]);

  return [state, setState];
}

function parse(obj: any) {
  try {
    return JSON.parse(obj);
  } catch {
    return obj;
  }
}
