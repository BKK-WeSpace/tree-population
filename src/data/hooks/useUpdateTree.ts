import { FetchResult } from "../models/NetworkResult";
import UpdateTreeInfoBody from "../models/UpdateTreeInfoBody";
import VallarisService from "../services/VallarisService";
import useFetch from "./useFetch";

export default function useUpdateTree({
  request,
  deps,
}: {
  request: UpdateTreeInfoBody;
  deps?: any[];
}) {
  return useFetch<FetchResult<void>>({
    callback: async () => await VallarisService.updateTreeData(request),
    deps,
  });
}
