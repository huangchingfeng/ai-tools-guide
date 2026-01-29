import { useState, useEffect } from 'react';

/**
 * 防抖 Hook - 延遲更新值，避免過度運算
 * @param value 要防抖的值
 * @param delay 延遲時間（毫秒）
 */
export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
