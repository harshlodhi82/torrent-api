import getTorrentNames from './index'
import Db from '../Db'
import {dbPath} from '../fixtures'

let expectedRes = [
  'Doom Patrol S01E03 Puppet Patrol 1080p DCU WEBRip AAC2 0 H264-NTb[rarbg]',
  'Sex Drugs &amp; Theatre (2019) Hindi '
    + 'Zee5 Originals S01 Complete 720P '
    + 'Web-Dl.',
  '[Leopard-Raws] Captain Tsubasa (2018) - 50 RAW (TX 1280x720 x264 AAC).mp4',
  '[Ohys-Raws] Bermuda Triangle Colorful '
    + 'Pastrale - 08 (AT-X 1280x720 x264 '
    + 'AAC).mp4'
]

test('getTorrentNames', async () => {
  const db = Db({dbPath}) as any
  await db.init()
  db.getTorrentNames = getTorrentNames
  Object.freeze(db)
  const torrentNames = await db.getTorrentNames({startAt: 0, limit: 4})
  expect(torrentNames).toEqual(expectedRes)
})
