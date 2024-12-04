import express from 'express'

import {routerVendas} from './routes/vendasRoute.js'

import { tryToConnect } from './database/db.js'

const server = express()
const port = 3000

server.use(express.json())
server.use(routerVendas)

server.listen(port, () => {
    tryToConnect()
    console.log(`Server runnning on port: ${port}`)
})