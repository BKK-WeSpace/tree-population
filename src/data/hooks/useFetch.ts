import { useEffect, useState } from "react";

export default function useFetch<T>({
  callback,
  deps = [],
  defaultValue,
}: {
  callback: () => Promise<T>;
  defaultValue?: T;
  deps: any[];
}): { isLoading: boolean; data: T | undefined } {
  // Default to true because first time the loading should be true.
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<T | undefined>(defaultValue);

  async function fetchData() {
    setIsLoading(true);
    const data = await callback();
    setIsLoading(false);
    setData(data);
  }

  useEffect(() => {
    fetchData();
  }, deps);

  return { isLoading, data };
}
