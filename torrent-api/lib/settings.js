import path from 'path'
import PATHS from 'lib/utils/paths'

const DB = {
  NAME: 'torrents',
  USERNAME: 'username',
  PASSWORD: 'password',
  PATH: path.join(PATHS.PATH_DATA, 'torrents.sqlite')
}

const SERVER = {
  PROTOCOL: 'http',
  HOST: 'localhost',
  PORT: 9402
}
SERVER.URL = `${SERVER.PROTOCOL}://${SERVER.HOST}:${SERVER.PORT}`

export {
  DB,
  SERVER
}
