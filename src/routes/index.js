
import Layout from '../layouts/layout'
import Index from '../pages/index'

export default {
  path: '/',
  component: Layout,
  indexRoute: {
    component: Index
  },
  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [ require('./about') ])
    })
  }
}
