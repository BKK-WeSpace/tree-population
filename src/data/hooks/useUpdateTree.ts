import { FetchResult } from "../models/NetworkResult";
import UpdateTreeInfoBody from "../models/UpdateTreeInfoBody";
import VallarisService from "../services/VallarisService";
import useFetchCallback from "./useFetchCallback";

/**
 *  A hook that returns a callback to update the tree
 */
export default function useUpdateTree({ deps }: { deps?: any[] }) {
  return useFetchCallback<FetchResult<void>, UpdateTreeInfoBody>({
    callback: async (request) => await VallarisService.updateTreeData(request),
    deps,
  });
}
