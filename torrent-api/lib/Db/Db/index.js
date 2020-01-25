import Sequelize from 'sequelize'
import models from './models'
import {loadingAnimation} from './utils'
import {DB} from 'lib/settings'

class Db {
  constructor ({dbPath} = {}) {
    this._sequelize = new Sequelize(
      DB.NAME,
      DB.USERNAME,
      DB.PASSWORD,
      {
        dialect: 'sqlite',
        storage: dbPath || DB.PATH,
        logging: false,
        operatorsAliases: Sequelize.Op
      }
    )

    this.Torrent = this._sequelize.define('torrent', ...models.torrent)
    this.Date = this._sequelize.define('date', ...models.date)
  }

  async init () {
    console.log('initialiazing db...')
    loadingAnimation.start()
    await this._sequelize.sync()
    loadingAnimation.stop()
    console.log('initialiazing db done')
  }

  async dump () {
    const torrents = await this.Torrent.findAll({raw: true})
    const dates = await this.Date.findAll({raw: true})
    return {torrents, dates}
  }
}

export default (...args) => new Db(...args)
