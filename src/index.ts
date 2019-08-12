
require('module-alias/register')
import 'reflect-metadata'

import dotenv = require('dotenv')
import { container } from '@config/inversify.config'
import { InversifyExpressServer } from 'inversify-express-utils'
import bodyParser from 'body-parser'
import expressFileUpload from 'express-fileupload'

// Carga todos los controladores y los servicios
import '@config/loader'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

const httpPort = process.env.PORT
const rootPath = process.env.ROOT_PATH || ""

const server = new InversifyExpressServer(container, null, {
  rootPath: rootPath
})

server.setConfig(app => {
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(expressFileUpload())
})

const app = server.build()
app.listen(httpPort)