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
  const allDates = await this.Date.findAll({
    where: {
      [this.sequelize.Sequelize.Op.and]: [
        this.sequelize.Sequelize.where(this.sequelize.Sequelize.fn('date', this.sequelize.Sequelize.col('date')), '<=', endDate),
        this.sequelize.Sequelize.where(this.sequelize.Sequelize.fn('date', this.sequelize.Sequelize.col('date')), '>=', startDate)
      ]
    }
  })
  return allDates
}

export default getMostPeersTorrentsFromDateRange
