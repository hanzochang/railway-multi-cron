import { apiClient } from '@/api-clients/api.api-client'

const healthCheck = async () => {
  const client = apiClient()
  return await client.post('/api/cron/health-check', {})
}

const syncData = async () => {
  const client = apiClient()
  return await client.post('/api/cron/sync-data', {})
}

const cleanup = async () => {
  const client = apiClient()
  return await client.post('/api/cron/cleanup', {})
}

export const apiService = {
  healthCheck,
  syncData,
  cleanup
}