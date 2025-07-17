import { workerApiClient } from '@/api-clients/worker.api-client'

const processTask = async () => {
  const client = workerApiClient()

  try {
    const response = await client.post('/api/process-task', {})
    return response.data
  } catch (error) {
    console.error('Error in processTask:', error)
    throw error
  }
}

export const workerService = {
  processTask
}