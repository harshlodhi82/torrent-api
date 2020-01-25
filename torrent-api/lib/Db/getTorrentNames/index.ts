import log from 'lib/utils/logger'

interface GetTorrentNames {
  (GetTorrentNamesSettings: {
    startAt: number,
    limit: number
  }): Promise<string[]>
}

// eslint-disable-next-line require-await
const getTorrentNames: GetTorrentNames = async function ({startAt, limit}) {
  return []
}

export default getTorrentNames
