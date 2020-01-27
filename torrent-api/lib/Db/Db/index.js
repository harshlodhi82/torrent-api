import Sequelize from 'sequelize'
import models from './models'
import {loadingAnimation} from './utils'
import {DB} from 'lib/settings'

class Db {
  constructor ({dbPath} = {}) {
    this.sequelize = new Sequelize(
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

    this.Torrent = this.sequelize.define('torrent', ...models.torrent)
    this.Date = this.sequelize.define('date', ...models.date)
  }

  async init () {
    console.log('initialiazing db...')
    loadingAnimation.start()
    await this.sequelize.sync()
    loadingAnimation.stop()
    this.Date.belongsTo(this.Torrent, {foreignKey: 'infohash'})
    this.Torrent.hasMany(this.Date, {foreignKey: 'infohash'})
    console.log('initialiazing db done')
  }

  async dump () {
    const torrents = await this.Torrent.findAll({raw: true})
    const dates = await this.Date.findAll({raw: true})
    return {torrents, dates}
  }
}

export default (...args) => new Db(...args)
