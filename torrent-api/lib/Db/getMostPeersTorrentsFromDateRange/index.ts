import log from 'lib/utils/logger'
import {Torrent} from '../interfaces'

interface GetMostPeersTorrentsFromDateRange {
  (GetTorrentNamesSettings: {
    startDate: string,
    endDate: string
  }): Promise<Torrent[]>
}

// eslint-disable-next-line require-await
const getMostPeersTorrentsFromDateRange: GetMostPeersTorrentsFromDateRange = async function ({startDate, endDate}) {
  return []
}

export default getMostPeersTorrentsFromDateRange
