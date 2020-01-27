import log from 'lib/utils/logger'
import getMostPeersTorrentsFromDateRange from './index'
import Db from '../Db'
import {dbPath} from '../fixtures'

const expectedRes = [
  {
    name: 'Aquaman.2018.1080p.WEBRip.x264-MP4',
    size: 2480343613,
    categories: 'Video:HD - Movies',
    createdAt: '2019-03-04',
    files: '[{"path":"Aquaman (2018) [WEBRip] [1080p] '
      + '[YTS.AM]/Aquaman.2018.1080p.WEBRip.x264-[YTS.AM].mp4","size":2475328876},{"path":"Aquaman '
      + '(2018) [WEBRip] [1080p] [YTS.AM]/www.YTS.AM.jpg","size":58132}]',
    dates: [
      {
        dateInfohash: '2019-03-06_b6e82665ef588bb6574db1f9780a0279274f407d',
        date: '2019-03-06',
        infohash: 'b6e82665ef588bb6574db1f9780a0279274f407d',
        trackers: '{"udp://tracker.leechers-paradise.org:6969/announce":{"seeds":3866,"leeches":3208,"downloaded":12818},"udp://tracker.coppersurfer.tk:6969/announce":{"seeds":17908,"leeches":18662,"downloaded":64451},"udp://exodus.desync.com:6969/announce":{"seeds":2121,"leeches":1518,"downloaded":6522}}',
        seeds: 17908,
        leeches: 18662,
        peers: 36570
      },
      {
        dateInfohash: '2019-03-07_b6e82665ef588bb6574db1f9780a0279274f407d',
        date: '2019-03-07',
        infohash: 'b6e82665ef588bb6574db1f9780a0279274f407d',
        trackers: '{"udp://tracker.leechers-paradise.org:6969/announce":{"seeds":4797,"leeches":2130,"downloaded":32059},"udp://tracker.coppersurfer.tk:6969/announce":{"seeds":19328,"leeches":12827,"downloaded":140778},"udp://exodus.desync.com:6969/announce":{"seeds":2604,"leeches":1004,"downloaded":15565}}',
        seeds: 19328,
        leeches: 12827,
        peers: 32155
      },
      {
        dateInfohash: '2019-03-09_b6e82665ef588bb6574db1f9780a0279274f407d',
        date: '2019-03-09',
        infohash: 'b6e82665ef588bb6574db1f9780a0279274f407d',
        trackers: '{"udp://tracker.leechers-paradise.org:6969/announce":{"seeds":5466,"leeches":1789,"downloaded":60435},"udp://tracker.coppersurfer.tk:6969/announce":{"seeds":19318,"leeches":9678,"downloaded":241112},"udp://exodus.desync.com:6969/announce":{"seeds":3045,"leeches":897,"downloaded":28386}}',
        seeds: 19318,
        leeches: 9678,
        peers: 28996
      },
      {
        dateInfohash: '2019-03-08_b6e82665ef588bb6574db1f9780a0279274f407d',
        date: '2019-03-08',
        infohash: 'b6e82665ef588bb6574db1f9780a0279274f407d',
        trackers: '{"udp://exodus.desync.com:6969/announce":{"seeds":2732,"leeches":829,"downloaded":21880},"udp://tracker.leechers-paradise.org:6969/announce":{"seeds":4919,"leeches":1660,"downloaded":46569},"udp://tracker.coppersurfer.tk:6969/announce":{"seeds":18608,"leeches":9692,"downloaded":193743}}',
        seeds: 18608,
        leeches: 9692,
        peers: 28300
      }
    ]
  },
  {
    name: 'Aquaman.2018.720p.WEBRip.x264',
    size: 1288490189,
    categories: 'Video:HD - Movies',
    createdAt: '2019-03-04',
    files: '[{"path":"Aquaman (2018) [WEBRip] [720p] '
      + '[YTS.AM]/Aquaman.2018.720p.WEBRip.x264-[YTS.AM].mp4","size":1293657543},{"path":"Aquaman '
      + '(2018) [WEBRip] [720p] [YTS.AM]/www.YTS.AM.jpg","size":58132}]',
    dates: [
      {
        dateInfohash: '2019-03-06_ad28cacbaea04bad181685740d251d76e2eba37a',
        date: '2019-03-06',
        infohash: 'ad28cacbaea04bad181685740d251d76e2eba37a',
        trackers: '{"udp://exodus.desync.com:6969/announce":{"seeds":913,"leeches":740,"downloaded":3183},"udp://tracker.leechers-paradise.org:6969/announce":{"seeds":2098,"leeches":1857,"downloaded":8575},"udp://tracker.coppersurfer.tk:6969/announce":{"seeds":12263,"leeches":12674,"downloaded":54991}}',
        seeds: 12263,
        leeches: 12674,
        peers: 24937
      },
      {
        dateInfohash: '2019-03-07_ad28cacbaea04bad181685740d251d76e2eba37a',
        date: '2019-03-07',
        infohash: 'ad28cacbaea04bad181685740d251d76e2eba37a',
        trackers: '{"udp://tracker.leechers-paradise.org:6969/announce":{"seeds":2027,"leeches":1280,"downloaded":18300},"udp://tracker.coppersurfer.tk:6969/announce":{"seeds":12235,"leeches":9141,"downloaded":109911},"udp://exodus.desync.com:6969/announce":{"seeds":947,"leeches":568,"downloaded":6116}}',
        seeds: 12235,
        leeches: 9141,
        peers: 21376
      },
      {
        dateInfohash: '2019-03-08_ad28cacbaea04bad181685740d251d76e2eba37a',
        date: '2019-03-08',
        infohash: 'ad28cacbaea04bad181685740d251d76e2eba37a',
        trackers: '{"udp://exodus.desync.com:6969/announce":{"seeds":845,"leeches":508,"downloaded":8151},"udp://tracker.leechers-paradise.org:6969/announce":{"seeds":1867,"leeches":1023,"downloaded":25498},"udp://tracker.coppersurfer.tk:6969/announce":{"seeds":11811,"leeches":7026,"downloaded":149617}}',
        seeds: 11811,
        leeches: 7026,
        peers: 18837
      },
      {
        dateInfohash: '2019-03-09_ad28cacbaea04bad181685740d251d76e2eba37a',
        date: '2019-03-09',
        infohash: 'ad28cacbaea04bad181685740d251d76e2eba37a',
        trackers: '{"udp://tracker.leechers-paradise.org:6969/announce":{"seeds":1922,"leeches":1050,"downloaded":31850},"udp://tracker.coppersurfer.tk:6969/announce":{"seeds":11623,"leeches":6834,"downloaded":183450},"udp://exodus.desync.com:6969/announce":{"seeds":889,"leeches":511,"downloaded":9940}}',
        seeds: 11623,
        leeches: 6834,
        peers: 18457
      }
    ]
  },
  {
    name: 'Spider-Man Into the Spider-Verse (2018) [WEBRip] [1080p] English',
    size: 2007897211,
    categories: 'Video:HD - Movies',
    createdAt: '2019-02-20',
    files: '[{"path":"Spider-Man Into The Spider-Verse (2018) [WEBRip] [1080p] '
      + '[YTS.AM]/Spider-Man.Into.The.Spider-Verse.2018.1080p.WEBRip.x264-[YTS.AM].mp4","size":2007245013},{"path":"Spider-Man '
      + 'Into The Spider-Verse (2018) [WEBRip] [1080p] '
      + '[YTS.AM]/www.YTS.AM.jpg","size":58132}]',
    dates: [
      {
        dateInfohash: '2019-03-03_a753ea13f243ef9c4006d103dcbdbc7cabad8a01',
        date: '2019-03-03',
        infohash: 'a753ea13f243ef9c4006d103dcbdbc7cabad8a01',
        trackers: '{"udp://tracker.leechers-paradise.org:6969/announce":{"seeds":5555,"leeches":1293,"downloaded":124598},"udp://tracker.coppersurfer.tk:6969/announce":{"seeds":14585,"leeches":3894,"downloaded":63672},"udp://exodus.desync.com:6969/announce":{"seeds":3339,"leeches":514,"downloaded":65158}}',
        seeds: 14585,
        leeches: 3894,
        peers: 18479
      },
      {
        dateInfohash: '2019-03-04_a753ea13f243ef9c4006d103dcbdbc7cabad8a01',
        date: '2019-03-04',
        infohash: 'a753ea13f243ef9c4006d103dcbdbc7cabad8a01',
        trackers: '{"udp://tracker.coppersurfer.tk:6969/announce":{"seeds":14063,"leeches":3456,"downloaded":87413},"udp://tracker.leechers-paradise.org:6969/announce":{"seeds":5424,"leeches":1102,"downloaded":134504},"udp://exodus.desync.com:6969/announce":{"seeds":3221,"leeches":404,"downloaded":69773}}',
        seeds: 14063,
        leeches: 3456,
        peers: 17519
      },
      {
        dateInfohash: '2019-03-05_a753ea13f243ef9c4006d103dcbdbc7cabad8a01',
        date: '2019-03-05',
        infohash: 'a753ea13f243ef9c4006d103dcbdbc7cabad8a01',
        trackers: '{"udp://tracker.leechers-paradise.org:6969/announce":{"seeds":4672,"leeches":753,"downloaded":141084},"udp://tracker.coppersurfer.tk:6969/announce":{"seeds":13034,"leeches":2527,"downloaded":102951},"udp://exodus.desync.com:6969/announce":{"seeds":2773,"leeches":274,"downloaded":72593}}',
        seeds: 13034,
        leeches: 2527,
        peers: 15561
      },
      {
        dateInfohash: '2019-03-06_a753ea13f243ef9c4006d103dcbdbc7cabad8a01',
        date: '2019-03-06',
        infohash: 'a753ea13f243ef9c4006d103dcbdbc7cabad8a01',
        trackers: '{"udp://tracker.leechers-paradise.org:6969/announce":{"seeds":4628,"leeches":681,"downloaded":145729},"udp://exodus.desync.com:6969/announce":{"seeds":2673,"leeches":230,"downloaded":74664},"udp://tracker.coppersurfer.tk:6969/announce":{"seeds":12937,"leeches":2401,"downloaded":115084}}',
        seeds: 12937,
        leeches: 2401,
        peers: 15338
      },
      {
        dateInfohash: '2019-03-07_a753ea13f243ef9c4006d103dcbdbc7cabad8a01',
        date: '2019-03-07',
        infohash: 'a753ea13f243ef9c4006d103dcbdbc7cabad8a01',
        trackers: '{"udp://tracker.leechers-paradise.org:6969/announce":{"seeds":4397,"leeches":629,"downloaded":150037},"udp://tracker.coppersurfer.tk:6969/announce":{"seeds":12486,"leeches":2144,"downloaded":126910},"udp://exodus.desync.com:6969/announce":{"seeds":2536,"leeches":209,"downloaded":76604}}',
        seeds: 12486,
        leeches: 2144,
        peers: 14630
      },
      {
        dateInfohash: '2019-03-08_a753ea13f243ef9c4006d103dcbdbc7cabad8a01',
        date: '2019-03-08',
        infohash: 'a753ea13f243ef9c4006d103dcbdbc7cabad8a01',
        trackers: '{"udp://exodus.desync.com:6969/announce":{"seeds":2437,"leeches":197,"downloaded":78329},"udp://tracker.leechers-paradise.org:6969/announce":{"seeds":4211,"leeches":551,"downloaded":154068},"udp://tracker.coppersurfer.tk:6969/announce":{"seeds":11756,"leeches":1863,"downloaded":137986}}',
        seeds: 11756,
        leeches: 1863,
        peers: 13619
      },
      {
        dateInfohash: '2019-03-09_a753ea13f243ef9c4006d103dcbdbc7cabad8a01',
        date: '2019-03-09',
        infohash: 'a753ea13f243ef9c4006d103dcbdbc7cabad8a01',
        trackers: '{"udp://tracker.leechers-paradise.org:6969/announce":{"seeds":4356,"leeches":629,"downloaded":158378},"udp://tracker.coppersurfer.tk:6969/announce":{"seeds":11596,"leeches":1828,"downloaded":149456},"udp://exodus.desync.com:6969/announce":{"seeds":2569,"leeches":194,"downloaded":80289}}',
        seeds: 11596,
        leeches: 1828,
        peers: 13424
      }
    ]
  },
  {
    name: 'Aquaman 2018 1080p WEB h264-STRiFE[rarbg]',
    size: 6152540652,
    categories: 'Movies',
    createdAt: '2019-03-05',
    files: '[{"path":"Aquaman.2018.1080p.WEB.h264-STRiFE[rarbg]/RARBG.txt","size":30},{"path":"Aquaman.2018.1080p.WEB.h264-STRiFE[rarbg]/RARBG_DO_NOT_MIRROR.exe","size":99},{"path":"Aquaman.2018.1080p.WEB.h264-STRiFE[rarbg]/aquaman.2018.1080p.web.h264-strife.mkv","size":6147564519},{"path":"Aquaman.2018.1080p.WEB.h264-STRiFE[rarbg]/aquaman.2018.1080p.web.h264-strife.nfo","size":51}]',
    dates: [
      {
        dateInfohash: '2019-03-06_2acd6bf94ba8a59803caa6a0667e69489a836091',
        date: '2019-03-06',
        infohash: '2acd6bf94ba8a59803caa6a0667e69489a836091',
        trackers: '{"udp://9.rarbg.me:2710/announce":{"seeds":7507,"leeches":4213,"downloaded":98511},"udp://9.rarbg.to:2770/announce":{"seeds":7507,"leeches":4213,"downloaded":98511},"udp://9.rarbg.to:2710/announce":{"seeds":7500,"leeches":4219,"downloaded":98530},"udp://9.rarbg.me:2730/announce":{"seeds":7504,"leeches":4219,"downloaded":98569}}',
        seeds: 7504,
        leeches: 4219,
        peers: 11723
      },
      {
        dateInfohash: '2019-03-07_2acd6bf94ba8a59803caa6a0667e69489a836091',
        date: '2019-03-07',
        infohash: '2acd6bf94ba8a59803caa6a0667e69489a836091',
        trackers: '{"udp://9.rarbg.to:2770/announce":{"seeds":5900,"leeches":1955,"downloaded":154896},"udp://9.rarbg.me:2710/announce":{"seeds":5897,"leeches":1963,"downloaded":154900},"udp://9.rarbg.to:2720/announce":{"seeds":5903,"leeches":1960,"downloaded":154910},"udp://9.rarbg.to:2710/announce":{"seeds":5901,"leeches":1968,"downloaded":154918},"udp://9.rarbg.me:2730/announce":{"seeds":5904,"leeches":1966,"downloaded":154918}}',
        seeds: 5904,
        leeches: 1966,
        peers: 7870
      },
      {
        dateInfohash: '2019-03-08_2acd6bf94ba8a59803caa6a0667e69489a836091',
        date: '2019-03-08',
        infohash: '2acd6bf94ba8a59803caa6a0667e69489a836091',
        trackers: '{"udp://9.rarbg.to:2720/announce":{"seeds":4834,"leeches":1260,"downloaded":184557},"udp://9.rarbg.to:2710/announce":{"seeds":4826,"leeches":1269,"downloaded":184559},"udp://9.rarbg.me:2730/announce":{"seeds":4823,"leeches":1269,"downloaded":184567},"udp://9.rarbg.me:2710/announce":{"seeds":4832,"leeches":1268,"downloaded":184570}}',
        seeds: 4832,
        leeches: 1268,
        peers: 6100
      },
      {
        dateInfohash: '2019-03-09_2acd6bf94ba8a59803caa6a0667e69489a836091',
        date: '2019-03-09',
        infohash: '2acd6bf94ba8a59803caa6a0667e69489a836091',
        trackers: '{"udp://9.rarbg.me:2710/announce":{"seeds":4711,"leeches":1328,"downloaded":208547},"udp://9.rarbg.to:2770/announce":{"seeds":4713,"leeches":1333,"downloaded":208548},"udp://9.rarbg.me:2730/announce":{"seeds":4712,"leeches":1334,"downloaded":208548},"udp://9.rarbg.to:2710/announce":{"seeds":4711,"leeches":1334,"downloaded":208549},"udp://9.rarbg.to:2720/announce":{"seeds":4709,"leeches":1335,"downloaded":208552}}',
        seeds: 4712,
        leeches: 1334,
        peers: 6046
      }
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
