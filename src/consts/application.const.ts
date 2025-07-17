const applicationConst = {
  api: {
    baseUrl: process.env.API_URL,
    bearerToken: process.env.API_BEARER_TOKEN
  },
  worker: {
    baseUrl: process.env.WORKER_URL,
    bearerToken: process.env.WORKER_BEARER_TOKEN
  }
}

export { applicationConst }