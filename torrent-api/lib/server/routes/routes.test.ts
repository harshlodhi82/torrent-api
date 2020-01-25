import server from '../index'
import fetch from 'node-fetch'
import {SERVER} from 'lib/settings'
import {dbPath} from 'lib/Db/fixtures'
import Db from 'lib/Db'

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
  const res = await fetch(`${SERVER.URL}/torrent/${name}`).then(res => res.json())
})

test('/torrents', async () => {
  // get top torrents last week
  throw Error(`TODO date must be mocked to '2019-03-18'`)
  const res = await fetch(`${SERVER.URL}/torrents`).then(res => res.json())
})

test('/torrents?startDate=2019-03-05&endDate=2019-03-18', async () => {
  const res = await fetch(`${SERVER.URL}/torrents?startDate=2019-03-05&endDate=2019-03-18`).then(res => res.json())
})

afterAll(async () => {
  // unmock date
  await server.destroy()
})
