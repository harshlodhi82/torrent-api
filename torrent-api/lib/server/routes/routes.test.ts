import server from '../index'
import fetch from 'node-fetch'
import {SERVER} from 'lib/settings'
import {dbPath} from 'lib/Db/fixtures'
import Db from 'lib/Db'
import log from 'lib/utils/logger'

beforeAll(async () => {
  // TODO mock date to '2019-03-18'
  server.cache = false
  server.db = Db({dbPath})
  await server.launch()
})

test('/hello', async () => {
  const res = await fetch(SERVER.URL).then(res => res.text())
  expect(res).toBe('hello')
})

test('/torrent/:torrentName', async () => {
  const name = 'Black Sabbath Discography (2016) @320kbps'
  const torrent = await fetch(`${SERVER.URL}/torrent/${name}`).then(res => res.json())
  expect(torrent.name).toEqual(name)
  expect(torrent).toHaveProperty('name')
  expect(torrent).toHaveProperty('size')
  expect(torrent).toHaveProperty('files')
  expect(torrent).toHaveProperty('categories')
  expect(torrent).toHaveProperty('createdAt')
  expect(torrent).toHaveProperty('dates')
  expect(Array.isArray(torrent.dates)).toBe(true)
})

test('/torrents', async () => {
  // // get top torrents last week
  const sevenDayBeforeDate = new Date(Date.now() - (7 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0]
  const res = await fetch(`${SERVER.URL}/torrents`).then(res => res.json())
  if (res.legth > 0) {
    expect(res[0].date).toEqual(sevenDayBeforeDate)
    expect(res.length <= 100).toEqual(true)
  }
})

test('/torrents?startDate=2019-03-05&endDate=2019-03-18', async () => {
  const res = await fetch(`${SERVER.URL}/torrents?startDate=2019-03-05&endDate=2019-03-18&limit=50&startAt=0`).then(res => res.json())
  expect(res[0].date).toEqual('2019-03-05')
  expect(res.length).toEqual(50)
})

afterAll(async () => {
  // unmock date
  await server.destroy()
})
