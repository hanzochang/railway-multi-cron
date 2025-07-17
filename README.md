# awesome-cron

A sample project for running multiple cron jobs on Railway.app.

## Overview

Railway.app only allows one command and execution schedule pair to be registered, which creates limitations when you want to run multiple different cron jobs. This project is a sample implementation that bypasses this limitation by creating a custom cron service.

## Features

- **Every 30 seconds**: Health check processing
- **Every 1 minute**: Data synchronization processing
- **Every 10 minutes**: Cleanup processing

## Setup

1. Install dependencies

```bash
npm install
```

2. Set up environment variables

```bash
cp .env.example .env
```

Edit the `.env` file to configure your actual API endpoints and tokens.

3. Run in development mode

```bash
npm run dev
```

4. Production build

```bash
npm run build
npm start
```

## Deploy to Railway.app

1. Push to GitHub repository
2. Create a project on Railway.app
3. Set environment variables:
   - `API_URL`
   - `API_BEARER_TOKEN`
   - `WORKER_URL`
   - `WORKER_BEARER_TOKEN`
4. Set service type to "Worker"

## Tech Stack

- Node.js 18+
- TypeScript
- node-cron
- axios
- Docker

## License

ISC
