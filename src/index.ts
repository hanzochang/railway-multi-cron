import 'dotenv/config'
import { setupCronJobs } from '@/cron/scheduler'

console.log('Starting awesome-cron service...')

setupCronJobs()

console.log('awesome-cron service is running. Press Ctrl+C to stop.')

process.on('SIGINT', () => {
  console.log('Received SIGINT. Gracefully shutting down...')
  process.exit(0)
})

process.on('SIGTERM', () => {
  console.log('Received SIGTERM. Gracefully shutting down...')
  process.exit(0)
})