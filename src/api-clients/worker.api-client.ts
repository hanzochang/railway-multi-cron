import axios, { AxiosInstance } from 'axios'
import { applicationConst } from '@/consts/application.const'

type ClientOptions = {
  headers?: Record<string, string>
}

export const workerApiClient = (options: ClientOptions = {}): AxiosInstance => {
  const baseUrl = applicationConst.worker.baseUrl

  return axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${applicationConst.worker.bearerToken}`,
      ...options.headers
    }
  })
}