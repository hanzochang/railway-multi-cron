import * as cron from 'node-cron'
import { apiService } from '@/services/api.service'
import { workerService } from '@/services/worker.service'

export const setupCronJobs = () => {
  console.log('Setting up cron jobs...')

  // 30秒間隔: ヘルスチェック処理
  cron.schedule('*/30 * * * * *', async () => {
    console.log('Running 30-second health check...')

    try {
      await apiService.healthCheck()
      console.log('Health check completed successfully')
    } catch (error) {
      console.error('Error in health check:', error)
    }
  })

  // 1分間隔: データ同期処理
  cron.schedule('* * * * *', async () => {
    console.log('Running 1-minute data sync...')

    try {
      await Promise.all([
        apiService.syncData(),
        workerService.processTask()
      ])
      console.log('Data sync completed successfully')
    } catch (error) {
      console.error('Error in data sync:', error)
    }
  })

  // 10分間隔: クリーンアップ処理
  cron.schedule('*/10 * * * *', async () => {
    console.log('Running 10-minute cleanup...')

    try {
      await apiService.cleanup()
      console.log('Cleanup completed successfully')
    } catch (error) {
      console.error('Error in cleanup:', error)
    }
  })

  console.log('Cron jobs have been set up successfully')
}