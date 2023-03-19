import MapStylesRepository from "../repositories/MapStylesRepository";
import useFetch from "./useFetch";

export default function useGetStyles(deps: any[] = []) {
  return useFetch<string>({
    callback: MapStylesRepository.getBaseMapstyle,
    deps,
  });
}
