import getMostPeersTorrentsFromDateRange from './index'
import Db from '../Db'
import {dbPath} from '../fixtures'

const expectedRes = [
  {
    name: 'Aquaman.2018.1080p.WEBRip.x264-MP4',
    size: 2480343613,
    categories: 'Video:HD - Movies',
    createdAt: '2019-03-04',
    files: [
      {
        path: 'Aquaman (2018) [WEBRip] [1080p] '
          + '[YTS.AM]/Aquaman.2018.1080p.WEBRip.x264-[YTS.AM].mp4',
        size: 2475328876
      },
      {
        path: 'Aquaman (2018) [WEBRip] [1080p] [YTS.AM]/www.YTS.AM.jpg',
        size: 58132
      }
    ],
    dates: [
      {
        peers: 36570,
        date: '2019-03-06',
        seeds: 17908,
        leeches: 18662
      },
      {
        peers: 32155,
        date: '2019-03-07',
        seeds: 19328,
        leeches: 12827
      },
      {peers: 28300, date: '2019-03-08', seeds: 18608, leeches: 9692}
    ]
  },
  {
    name: 'Aquaman.2018.720p.WEBRip.x264',
    size: 1288490189,
    categories: 'Video:HD - Movies',
    createdAt: '2019-03-04',
    files: [
      {
        path: 'Aquaman (2018) [WEBRip] [720p] '
          + '[YTS.AM]/Aquaman.2018.720p.WEBRip.x264-[YTS.AM].mp4',
        size: 1293657543
      },
      {
        path: 'Aquaman (2018) [WEBRip] [720p] [YTS.AM]/www.YTS.AM.jpg',
        size: 58132
      }
    ],
    dates: [
      {
        peers: 24937,
        date: '2019-03-06',
        seeds: 12263,
        leeches: 12674
      },
      {peers: 21376, date: '2019-03-07', seeds: 12235, leeches: 9141},
      {peers: 18837, date: '2019-03-08', seeds: 11811, leeches: 7026}
    ]
  },
  {
    name: 'Spider-Man Into the Spider-Verse (2018) [WEBRip] [1080p] English',
    size: 2007897211,
    categories: 'Video:HD - Movies',
    createdAt: '2019-02-20',
    files: [
      {
        path: 'Spider-Man Into The Spider-Verse (2018) [WEBRip] [1080p] '
          + '[YTS.AM]/Spider-Man.Into.The.Spider-Verse.2018.1080p.WEBRip.x264-[YTS.AM].mp4',
        size: 2007245013
      },
      {
        path: 'Spider-Man Into The Spider-Verse (2018) '
          + '[WEBRip] [1080p] [YTS.AM]/www.YTS.AM.jpg',
        size: 58132
      }
    ],
    dates: [
      {peers: 18479, date: '2019-03-03', seeds: 14585, leeches: 3894},
      {peers: 17519, date: '2019-03-04', seeds: 14063, leeches: 3456},
      {peers: 15561, date: '2019-03-05', seeds: 13034, leeches: 2527},
      {peers: 15338, date: '2019-03-06', seeds: 12937, leeches: 2401},
      {peers: 14630, date: '2019-03-07', seeds: 12486, leeches: 2144},
      {peers: 13619, date: '2019-03-08', seeds: 11756, leeches: 1863}
    ]
  },
  {
    name: 'Aquaman 2018 1080p WEB h264-STRiFE[rarbg]',
    size: 6152540652,
    categories: 'Movies',
    createdAt: '2019-03-05',
    files: [
      {
        path: 'Aquaman.2018.1080p.WEB.h264-STRiFE[rarbg]/RARBG.txt',
        size: 30
      },
      {
        path: 'Aquaman.2018.1080p.WEB.h264-STRiFE[rarbg]/RARBG_DO_NOT_MIRROR.exe',
        size: 99
      },
      {
        path: 'Aquaman.2018.1080p.WEB.h264-STRiFE[rarbg]/aquaman.2018.1080p.web.h264-strife.mkv',
        size: 6147564519
      },
      {
        path: 'Aquaman.2018.1080p.WEB.h264-STRiFE[rarbg]/aquaman.2018.1080p.web.h264-strife.nfo',
        size: 51
      }
    ],
    dates: [
      {peers: 11723, date: '2019-03-06', seeds: 7504, leeches: 4219},
      {peers: 7870, date: '2019-03-07', seeds: 5904, leeches: 1966},
      {peers: 6100, date: '2019-03-08', seeds: 4832, leeches: 1268}
    ]
  }
]
test('getMostPeersTorrentsFromDateRange', async () => {
  const db = Db({dbPath}) as any
  await db.init()
  db.getMostPeersTorrentsFromDateRange = getMostPeersTorrentsFromDateRange
  Object.freeze(db)
  const peerDates = await db.getMostPeersTorrentsFromDateRange({startDate: '2019-03-03', endDate: '2019-03-08', limit: 4})
  expect(peerDates).toEqual(expectedRes)
})
