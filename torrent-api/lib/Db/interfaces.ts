interface TorrentDate {
  date: string
  seeds: number
  leeches: number
  peers: number
}

interface Torrent {
  name: string
  size: number
  categories: string
  createdAt: string
  dates: TorrentDate[]
}

export {
  Torrent,
  TorrentDate
}
