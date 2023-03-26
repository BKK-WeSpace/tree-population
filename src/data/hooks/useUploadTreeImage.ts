import Tree from "../../types/Trees";
import { FetchResult } from "../models/NetworkResult";
import TreesRequestParams from "../models/TreesRequest";
import { TreesResponse } from "../models/TreesResponse";
import UploadImageResponse from "../models/UploadImageResponse";
import VallarisService from "../services/VallarisService";
import useFetchCallback from "./useFetchCallback";
import useUpdateTree from "./useUpdateTree";

// TODO check upload image type.
export function useUploadImage({
  imageFilePath,
  treeToBeUpdated,
}: {
  imageFilePath: string;
  treeToBeUpdated: Tree;
}) {
  const { fetch: uploadImage } = useFetchCallback<
    FetchResult<UploadImageResponse>,
    string
  >({
    callback: async (request) => VallarisService.upload(request),
  });

  const { fetch: updateTree } = useUpdateTree({ deps: [] });

  const { fetch: refetchAllTrees } = useFetchCallback<
    FetchResult<TreesResponse>,
    TreesRequestParams
  >({
    callback: (req) => VallarisService.getAllTrees(req, false),
  });

  const uploadCallback = useFetchCallback<
    FetchResult<TreesResponse>,
    undefined
  >({
    callback: async () => {
      const uploadResult = await uploadImage(imageFilePath);
      if (uploadResult.error) {
        return {
          fromCache: false,
          error: uploadResult.error,
        };
      }

      treeToBeUpdated.properties ??= {};
      treeToBeUpdated.properties.imgId = uploadResult.result!.files[0].id;
      const updateResult = await updateTree(treeToBeUpdated);

      if (updateResult.error) {
        return {
          fromCache: false,
          error: uploadResult.error,
        };
      }

      const fetchResult = await refetchAllTrees({});
      if (fetchResult.error) {
        return {
          fromCache: false,
          error: fetchResult.error,
        };
      }

      return fetchResult;
    },
  });

  return uploadCallback;
}
