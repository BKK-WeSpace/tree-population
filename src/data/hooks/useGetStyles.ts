import { FetchResult } from "../models/NetworkResult";
import VallarisService from "../services/VallarisService";
import useFetch from "./useFetch";

export default function useGetStyles(deps: any[] = []) {
  return useFetch<FetchResult<string>>({
    callback: () => Promise.resolve(VallarisService.getMapStyle()),
    deps,
  });
}
