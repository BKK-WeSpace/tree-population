/**
 * For simplicity's sake, we only allow the Polygon request type for now.
 */
export default interface TreesRequestParams {
    boundingBox?: [number, number, number, number];
    limit?: number;
}
