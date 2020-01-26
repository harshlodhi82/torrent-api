import routes from './routes'
import {SERVER} from 'lib/settings'
import {logger} from './middlewares'
import Db from 'lib/Db'
import express from 'express'
import autoBind from 'auto-bind'
import log from 'lib/utils/logger'
const cache = require('apicache').middleware

class Server {
  constructor () {
    this.app = express()
    this.app.disable('x-powered-by')
    this._server = null
    this.port = SERVER.PORT
    this.db = Db()
    this.cache = true
    autoBind(this)
  }

  async _create () {
    await this.db.init()
    this.app.use(logger)
    if (this.cache) {
      log.info('server cache enabled')
      this.app.use(cache('1 hour'))
    }
    this.app.use(routes)
    this.app.set('db', this.db)
  }

  async launch () {
    await this._create()
    await this._listen()
  }

  async _listen () {
    await new Promise(resolve => {
      this._server = this.app.listen(this.port, resolve)
    })
    log.info(`${this.constructor.name} listening at ${this.port}`)
  }

  async destroy () {
    await this._server.close()
    this._server = null
    log.info('destroyed')
  }
}

export default new Server()
