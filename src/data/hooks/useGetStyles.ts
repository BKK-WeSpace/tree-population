import { FetchResult } from "../models/NetworkResult";
import MapStylesRepository from "../repositories/MapStylesRepository";
import useFetch from "./useFetch";

export default function useGetStyles(deps: any[] = []): {
  style?: string;
  isLoading: boolean;
} {
  return useFetch<FetchResult<string>>({
    callback: MapStylesRepository.getBaseMapstyle,
    deps,
  });
}
