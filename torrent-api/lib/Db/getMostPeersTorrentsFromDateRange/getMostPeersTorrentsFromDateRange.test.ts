import getMostPeersTorrentsFromDateRange from './index'
import Db from '../Db'
import {dbPath} from '../fixtures'

test('getMostPeersTorrentsFromDateRange', async () => {
  const db = Db({dbPath}) as any
  await db.init()
  db.getMostPeersTorrentsFromDateRange = getMostPeersTorrentsFromDateRange
  Object.freeze(db)
  const torrents = await db.getMostPeersTorrentsFromDateRange({startDate: '2019-03-03', endDate: '2019-03-08'})
  throw Error('TODO')
})
