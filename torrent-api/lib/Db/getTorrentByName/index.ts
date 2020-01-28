import {Torrent} from '../interfaces'

// eslint-disable-next-line require-await
const getTorrentByName = async function (name: string): Promise<Torrent> {
  const attributes = ['name', 'size', 'categories', 'createdAt', 'files']
  let torrent = await this.Torrent.findOne({
    where: {name},
    attributes,
    include: [{
      model: this.Date,
      attributes: ['peers', 'date', 'seeds', 'leeches']
    }]
  })
  torrent = torrent.get({plain: true})
  torrent.files = JSON.parse(torrent.files)
  return torrent
}

export default getTorrentByName
