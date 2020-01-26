import log from 'lib/utils/logger'
import {Torrent} from '../interfaces'

interface GetMostPeersTorrentsFromDateRange {
  (GetTorrentNamesSettings: {
    startDate: string,
    endDate: string,
    startAt: number,
    limit: number
  }): Promise<Torrent[]>
}

// eslint-disable-next-line require-await
const getMostPeersTorrentsFromDateRange: GetMostPeersTorrentsFromDateRange = async function ({startDate, endDate, startAt, limit}) {
  const todayDate = new Date(Date.now()).toISOString().split('T')[0]
  const sevenDayBeforeDate = new Date(Date.now() - (7 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0]
  startDate = (startDate) || sevenDayBeforeDate
  endDate = (endDate) || todayDate
  startAt = (startAt) || 0
  limit = (limit) || 100
  const allDates = await this.Date.findAll({
    where: {
      [this.sequelize.Sequelize.Op.and]: [
        this.sequelize.Sequelize.where(this.sequelize.Sequelize.fn('date', this.sequelize.Sequelize.col('date')), '<=', endDate),
        this.sequelize.Sequelize.where(this.sequelize.Sequelize.fn('date', this.sequelize.Sequelize.col('date')), '>=', startDate)
      ]
    },
    offset: startAt,
    limit: limit
  })
  return allDates
}

export default getMostPeersTorrentsFromDateRange
