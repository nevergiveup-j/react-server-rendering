import express from 'express'
import path from 'path'

import React from 'react'
import { renderServer } from './pageRender'
import { isDebug } from '../config/env'

const app = express()
const PORT = process.env.PORT || 9000
const rootPaths = path.resolve('.')
const src = path.resolve('src')

app.use('/static', express.static(rootPaths + '/dist'));

if(isDebug) {
    const webpack = require('webpack')
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpackHotMiddleware = require('webpack-hot-middleware')
    const webpackConfig = require('../build/webpack.dev.config')
    const testRoutes = require('./test/routes').default
    
    const compiler = webpack(webpackConfig)

    testRoutes(app)

    console.log(testRoutes)

    app.use(webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        lazy: false,
        noInfo: true,
        quiet: false,
        hot: true,
        stats: {
            chunks: false,
            chunkModules: false,
            colors: true
        }
    }))
        
    app.use(webpackHotMiddleware(compiler));
}

app.use(renderServer)

app.listen(PORT, () => {
    console.log(`Listening at http://127.0.0.1:${PORT}`);
})
