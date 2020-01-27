import log from 'lib/utils/logger'
import _ from 'lodash'

interface GetTorrentNames {
  (GetTorrentNamesSettings: {
    startAt: number,
    limit: number
  }): Promise<string[]>
}

// eslint-disable-next-line require-await
const getTorrentNames: GetTorrentNames = async function ({startAt, limit}) {
  let allTorrentNames = await this.Torrent.findAll({raw: true, attributes: ['name'], offset: startAt, limit: limit})
  allTorrentNames = _.map(allTorrentNames, 'name')
  return allTorrentNames
}

export default getTorrentNames
