import { httpClient } from "../modules/httpClient"
import type { ApiResponse, PostT } from "../models/interfaces"

export default {
  getAll: (): Promise<ApiResponse<PostT[]>> => httpClient.get(`/posts`),
  get: (id: number): Promise<ApiResponse<PostT>> => httpClient.get(`/posts/${id}`),
}