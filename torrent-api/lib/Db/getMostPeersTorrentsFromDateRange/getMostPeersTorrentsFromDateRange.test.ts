import getMostPeersTorrentsFromDateRange from './index'
import Db from '../Db'
import {dbPath} from '../fixtures'

test('getMostPeersTorrentsFromDateRange', async () => {
  const db = Db({dbPath}) as any
  await db.init()
  db.getMostPeersTorrentsFromDateRange = getMostPeersTorrentsFromDateRange
  Object.freeze(db)
  const peerDates = await db.getMostPeersTorrentsFromDateRange({startDate: '2019-03-03', endDate: '2019-03-08'})
  expect(peerDates[0].date).toEqual('2019-03-03')
  expect(peerDates[peerDates.length - 1].date).toEqual('2019-03-08')
})
