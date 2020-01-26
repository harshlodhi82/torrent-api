import getTorrentNames from './index'
import Db from '../Db'
import {dbPath} from '../fixtures'

test('getTorrentNames', async () => {
  const db = Db({dbPath}) as any
  await db.init()
  db.getTorrentNames = getTorrentNames
  Object.freeze(db)
  const startAt_1 = 0
  const limit_1 = 20
  const startAt_2 = 10
  const limit_2 = 100
  const startTorrentNames = await db.getTorrentNames({startAt: startAt_1, limit: limit_1})
  const torrentNames = await db.getTorrentNames({startAt: startAt_2, limit: limit_2})
  expect(torrentNames.length).toEqual(limit_2)
  expect(startTorrentNames.length).toEqual(limit_1)
  expect(torrentNames[0].name).not.toEqual(startTorrentNames[0].name)
  expect(startTorrentNames[startTorrentNames.length - 1].name).toEqual(torrentNames[(startTorrentNames.length - startAt_2) - 1].name)
})
