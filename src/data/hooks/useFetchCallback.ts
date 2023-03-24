import { useCallback, useEffect, useState } from "react";
import Pending from "../../types/Pending";

export default function useFetchCallback<Response, Request>({
  callback,
  deps = [],
}: {
  callback: (request: Request) => Promise<Response>;
  deps?: any[];
}): Pending<Response | undefined> & {
  fetch: (request: Request) => Promise<Response>;
} {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Response>();

  const fetchData = useCallback(async (request: Request) => {
    setIsLoading(true);
    const data = await callback(request);
    setIsLoading(false);
    setData(data);
    return data;
  }, deps);

  return {
    isLoading,
    data,
    fetch: fetchData,
  };
}
