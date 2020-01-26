import getMostPeersTorrentsFromDateRange from './index'
import Db from '../Db'
import {dbPath} from '../fixtures'

test('getMostPeersTorrentsFromDateRange', async () => {
  const db = Db({dbPath}) as any
  await db.init()
  db.getMostPeersTorrentsFromDateRange = getMostPeersTorrentsFromDateRange
  Object.freeze(db)
  const sevenDayBeforeDate = new Date(Date.now() - (7 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0]
  const peerDates = await db.getMostPeersTorrentsFromDateRange({startDate: '2019-03-03', endDate: '2019-03-08'})
  const peerDates2 = await db.getMostPeersTorrentsFromDateRange({startAt: 0, limit: 10})
  expect(peerDates[0].date).toEqual('2019-03-03')
  expect(peerDates.length).toEqual(100)
  if (peerDates2.length > 0) {
    expect(peerDates2[0].date).toEqual(sevenDayBeforeDate)
    expect(peerDates2.length <= 10).toEqual(true)
  }
})
