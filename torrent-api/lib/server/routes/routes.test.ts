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
  expect(torrent).toHaveProperty('infohash')
  expect(torrent).toHaveProperty('size')
  expect(torrent).toHaveProperty('files')
  expect(torrent).toHaveProperty('trackers')
  expect(torrent).toHaveProperty('categories')
  expect(torrent).toHaveProperty('createdAt')
})

test('/torrents', async () => {
  // // get top torrents last week
  throw Error(`TODO date must be mocked to '2019-03-18'`)
  const res = await fetch(`${SERVER.URL}/torrents`).then(res => res.json())
})

test('/torrents/:dateRange', async () => {
  const peerDates = await fetch(`${SERVER.URL}/torrents?startDate=2019-03-05&endDate=2019-03-15`).then(res => res.json())
  expect(peerDates[0].date).toEqual('2019-03-05')
  expect(peerDates[peerDates.length - 1].date).toEqual('2019-03-15')
})

afterAll(async () => {
  // unmock date
  await server.destroy()
})
