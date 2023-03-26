import Tree from "../../types/Trees";
import VallarisService from "../services/VallarisService";
import useFetchCallback from "./useFetchCallback";

export async function useDownloadTreeImage() {
  return useFetchCallback<Awaited<Blob>, Tree>({
    callback: async (request) => {
      return await VallarisService.downloadTreeImage(request);
    },
  });
}
