import {Torrent} from '../interfaces'

interface GetMostPeersTorrentsFromDateRange {
  (GetTorrentNamesSettings: {
    startDate: string,
    endDate: string,
    limit: number
  }): Promise<Torrent[]>
}

// eslint-disable-next-line require-await
const getMostPeersTorrentsFromDateRange: GetMostPeersTorrentsFromDateRange = async function ({startDate, endDate, limit}) {
  let allDates = await this.sequelize.query(`SELECT DISTINCT torrents.infohash FROM dates
  JOIN torrents on dates.infohash = torrents.infohash
  where date(dates.date) >= '${startDate}' AND date(dates.date) <= '${endDate}'
  ORDER BY dates.peers DESC LIMIT ${limit}`)
  const attributes = ['name', 'size', 'categories', 'createdAt', 'files']
  let data = await this.Torrent.findAll({
    where: {[this.sequelize.Sequelize.Op.or]: allDates[0]},
    attributes,
    include: [{
      model: this.Date,
      attributes: ['peers', 'date', 'seeds', 'leeches']
    }],
    order: [[this.Date, 'peers', 'desc']]
  })
  let torrents = data.map((torrent) => {
    let trnt = torrent.get({plain: true})
    trnt.files = JSON.parse(trnt.files)
    return trnt
  })
  return torrents
}

export default getMostPeersTorrentsFromDateRange
