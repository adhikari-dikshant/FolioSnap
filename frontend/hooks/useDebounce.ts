"use client";

import { useEffect, useRef, useState } from "react";

export function useDebounce<T>(value: T, delay = 400): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

export function useDebouncedCallback<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay = 400
): T {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  return ((...args: unknown[]) => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => fn(...args), delay);
  }) as T;
}
