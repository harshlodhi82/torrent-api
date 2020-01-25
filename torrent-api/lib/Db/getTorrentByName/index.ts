import log from 'lib/utils/logger'
import {Torrent} from '../interfaces'

// eslint-disable-next-line require-await
const getTorrentByName = async function (name: string) : Promise<Torrent> {
  return {
    name: 'string',
    size: 1,
    categories: 'string',
    createdAt: 'string',
    dates: [],
    files: []
  }
}

export default getTorrentByName
