import log from 'lib/utils/logger'

interface GetTorrentNames {
  (GetTorrentNamesSettings: {
    startAt: number,
    limit: number
  }): Promise<string[]>
}

// eslint-disable-next-line require-await
const getTorrentNames: GetTorrentNames = async function ({startAt, limit}) {
  const allTorrents = await this.Torrent.findAll({offset: startAt, limit: limit})
  return allTorrents
}

export default getTorrentNames
