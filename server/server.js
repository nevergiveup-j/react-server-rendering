import express from 'express'
import path from 'path'

import React from 'react'
import { renderServer } from '../dist/server'

const app = express()
const PORT = process.env.PORT || 9000
const rootPaths = path.resolve('.')
const src = path.resolve('src')

app.use('/static', express.static(rootPaths + '/dist'));

app.use(renderServer)

app.listen(PORT, () => {
    console.log(`Listening at http://127.0.0.1:${PORT}`);
})
