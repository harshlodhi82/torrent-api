import getTorrentNames from './index'
import Db from '../Db'
import {dbPath} from '../fixtures'

const expectedResOne = [
  'Doom Patrol S01E03 Puppet Patrol 1080p DCU WEBRip AAC2 0 H264-NTb[rarbg]',
  'Sex Drugs &amp; Theatre (2019) Hindi '
    + 'Zee5 Originals S01 Complete 720P '
    + 'Web-Dl.',
  '[Leopard-Raws] Captain Tsubasa (2018) - 50 RAW (TX 1280x720 x264 AAC).mp4',
  '[Ohys-Raws] Bermuda Triangle Colorful '
    + 'Pastrale - 08 (AT-X 1280x720 x264 '
    + 'AAC).mp4'
]

const expectedResTwo = [
  '[HorribleSubs] Dimension High School - 09 [1080p].mkv',
  '[HorribleSubs] Sword Art Online - Alicization - 23 [720p].mkv',
  '[HorribleSubs] Kouya no Kotobuki Hikoutai - 05 [720p].mkv',
  '[ACESSE COMANDOTORRENTS COM] The '
    + 'Walking Dead S09E12 [720p] [WEB-DL] '
    + '[DUAL]'
]

const expectedResThree = [
  '[Orphan] Al Caral no Isan v2 (LD)',
  'gotham s05e08 720p web x264-tbs[eztv] mkv',
  '[HorribleSubs] Boogiepop wa Warawanai (2019) - 06 [1080p].mkv',
  '[Over-Time] Kamen Rider Zi-O - 25 [23A6890D].mkv'
]

const expectedResFour = [
  '[Leopard-Raws] JoJo no Kimyou na Bouken： Ougon '
    + 'no Kaze - 22 RAW (BS11 1280x720 x264 AAC).mp4',
  '[HorribleSubs] Kouya no Kotobuki Hikoutai - 08 [720p].mkv',
  'Movavi Video Converter 19 0 2   patch - Crackingpatching zip',
  'Creed II (2018) [BluRay] [720p] [YTS] [YIFY]'
]

test('getTorrentNames', async () => {
  const db = Db({dbPath}) as any
  await db.init()
  db.getTorrentNames = getTorrentNames
  Object.freeze(db)
  const torrentNamesTestOne = await db.getTorrentNames({startAt: 0, limit: 4})
  const torrentNamesTestTwo = await db.getTorrentNames({startAt: 4, limit: 4})
  const torrentNamesTestThree = await db.getTorrentNames({startAt: 8, limit: 4})
  const torrentNamesTestFour = await db.getTorrentNames({startAt: 12, limit: 4})
  expect(torrentNamesTestOne).toEqual(expectedResOne)
  expect(torrentNamesTestTwo).toEqual(expectedResTwo)
  expect(torrentNamesTestThree).toEqual(expectedResThree)
  expect(torrentNamesTestFour).toEqual(expectedResFour)
})
