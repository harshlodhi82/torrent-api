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

router.get('/torrents', async (req, res) => {
  const db = req.app.get('db')
  const startDate = req.query.startDate
  const endDate = req.query.endDate
  const startAt = req.query.startAt
  const limit = req.query.limit
  const peerDates = await db.getMostPeersTorrentsFromDateRange({startDate, endDate, startAt, limit})
  res.send(peerDates)
})

router.all('*', send404)

export default router
