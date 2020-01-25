import getTorrentByName from './index'
import Db from '../Db'
import {dbPath} from '../fixtures'

test('getTorrentByName', async () => {
  const db = Db({dbPath}) as any
  await db.init()
  db.getTorrentByName = getTorrentByName
  Object.freeze(db)
  const name = 'Black Sabbath Discography (2016) @320kbps'
  const torrent = await db.getTorrentByName(name)
  throw Error('TODO')
})
