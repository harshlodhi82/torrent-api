import Db from './Db'
import getMostPeersTorrentsFromDateRange from './getMostPeersTorrentsFromDateRange'
import getTorrentByName from './getTorrentByName'
import getTorrentNames from './getTorrentNames'

const createDb = (...args) => {
  const db = Db(...args)
  db.getMostPeersTorrentsFromDateRange = getMostPeersTorrentsFromDateRange
  db.getTorrentByName = getTorrentByName
  db.getTorrentNames = getTorrentNames
  return db
}

export default createDb
