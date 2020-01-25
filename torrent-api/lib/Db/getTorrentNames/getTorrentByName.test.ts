import getTorrentNames from './index'
import Db from '../Db'
import {dbPath} from '../fixtures'

test('getTorrentNames', async () => {
  const db = Db({dbPath}) as any
  await db.init()
  db.getTorrentNames = getTorrentNames
  Object.freeze(db)
  const torrentNames = await db.getTorrentNames({startAt: 10, limit: 100})
  throw Error('TODO')
})
