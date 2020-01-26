import {send404} from '../utils'
import {Router} from 'express'
const router = Router()

router.get('/', (req, res) => {
  res.send('hello')
})

router.get('/time', (req, res) => {
  const time = JSON.stringify(Date.now())
  res.send(time)
})

router.get('/torrent/:torrentName', async (req, res) => {
  const db = req.app.get('db')
  const torrentName = req.params.torrentName
  const torrent = await db.getTorrentByName(torrentName)
  res.json(torrent)
})

router.get('/torrents/:dateRange?', async (req, res) => {
  const db = req.app.get('db')
  const startDate = req.query.startDate
  const endDate = req.query.endDate
  const peerDates = await db.getMostPeersTorrentsFromDateRange({startDate, endDate})
  res.send(peerDates)
})

router.all('*', send404)

export default router
