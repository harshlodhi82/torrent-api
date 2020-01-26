import log from 'lib/utils/logger'
import {Torrent} from '../interfaces'

// eslint-disable-next-line require-await
const getTorrentByName = async function (name: string): Promise<Torrent> {
  const attributes = ['name', 'size', 'categories', 'createdAt', 'files']
  this.Date.belongsTo(this.Torrent, {foreignKey: 'infohash'})
  this.Torrent.hasMany(this.Date, {foreignKey: 'infohash'})
  const torrent = await this.Torrent.findOne({
    where: {name},
    attributes,
    include: [{
      model: this.Date
    }]
  })
  return torrent
}

export default getTorrentByName
