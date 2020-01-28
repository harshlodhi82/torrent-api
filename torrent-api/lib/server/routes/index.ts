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
  if (!torrentName) throw Error('No name provided')
  const torrent = await db.getTorrentByName(torrentName)
  res.json(torrent)
})

router.get('/torrents', async (req, res) => {
  const db = req.app.get('db')
  let startDate = req.query.startDate
  let endDate = req.query.endDate
  let limit = req.query.limit

  const todayDate = new Date(Date.now()).toISOString().split('T')[0]
  const sevenDayBeforeDate = new Date(Date.now() - (7 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0]
  startDate = (startDate) || sevenDayBeforeDate
  endDate = (endDate) || todayDate
  limit = (limit) || 100

  const peerDates = await db.getMostPeersTorrentsFromDateRange({startDate, endDate, limit})
  res.json(peerDates)
})

router.all('*', send404)

export default router
