import axios, { AxiosInstance } from 'axios'
import { applicationConst } from '@/consts/application.const'

type ClientOptions = {
  headers?: Record<string, string>
}

export const apiClient = (options: ClientOptions = {}): AxiosInstance => {
  const baseUrl = applicationConst.api.baseUrl

  return axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${applicationConst.api.bearerToken}`,
      ...options.headers
    }
  })
}
