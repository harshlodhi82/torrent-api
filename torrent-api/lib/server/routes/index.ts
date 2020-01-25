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

router.get('/torrent/:torrentName', (req, res) => {
  res.end()
})

router.get('/torrents/:dateRange?', (req, res) => {
  res.end()
})

router.all('*', send404)

export default router
