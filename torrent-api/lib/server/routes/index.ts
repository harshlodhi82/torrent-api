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
  try {
    const db = req.app.get('db')
    const torrentName = req.params.torrentName
    if (!torrentName) throw Error('No name provided')
    const torrent = await db.getTorrentByName(torrentName)
    res.json(torrent)
  }
  catch (error) {
    res.status(404).send(error)
  }
})

router.get('/torrents', async (req, res) => {
  try {
    const db = req.app.get('db')
    let {startDate, endDate, limit} = req.query
    const todayDate = new Date(Date.now()).toISOString().split('T')[0]
    const sevenDayBeforeDate = new Date(Date.now() - (7 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0]
    startDate = (startDate) || sevenDayBeforeDate
    endDate = (endDate) || todayDate
    limit = (limit) || 100
    const peerDates = await db.getMostPeersTorrentsFromDateRange({startDate, endDate, limit})
    res.json(peerDates)
  }
  catch (error) {
    res.status(404).send(error)
  }
})

router.all('*', send404)

export default router
