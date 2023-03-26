export default interface UploadImageResponse {
  files: UploadImageResponseFile[];
}

export interface UploadImageResponseFile {
  id: string;
  name: string;
  type: string;
  size: number;
  path: string;
  auth_required: boolean;
}
