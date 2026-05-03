import {createServer} from 'http'
import {getPublicDirPath} from './config/index.js'
import {makeDir} from './utils/index.js'
import {createExpressApp} from './express/index.js'
import type {MongoDB} from './mongodb/index.js'
import {connectAndUseDB} from './mongodb/index.js'

makeDir(getPublicDirPath())

const connectCallback = (db: MongoDB) => {
  const hostname = 'localhost',
    port = 4000

  createServer(createExpressApp(db)).listen(port, () =>
    console.log(`connect http://${hostname}:${port}`)
  )
}

connectAndUseDB(connectCallback, 'ch07')
