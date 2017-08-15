import Layout from '../layouts/layout'
import Index from '../pages/index'
import About from '../pages/about'

export default {
  path: '/',
  component: Layout,
  indexRoute: {
    component: Index
  },
  childRoutes: [
    {
      path: 'about',
      component: About
    }
  ]
  // getChildRoutes(location, cb) {
  //   require.ensure([], (require) => {
  //     cb(null, [ require('./about') ])
  //   })
  // }
}
