import log from 'lib/utils/logger'

const logger = (req, res, next) => {
  log.info(req.method, req.originalUrl)
  next()
}

export {
  logger
}
