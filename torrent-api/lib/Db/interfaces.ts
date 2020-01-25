interface TorrentDate {
  date: string
  seeds: number
  leeches: number
  peers: number
}

interface TorrentFile {
  path: string
  size: number
}

interface Torrent {
  name: string
  size: number
  categories: string
  createdAt: string
  dates: TorrentDate[]
  files: TorrentFile[]
}

export {
  Torrent,
  TorrentDate,
  TorrentFile
}
