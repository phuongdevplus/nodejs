const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const meRouter = require('./me');
const homeRouter = require('./home');

function route(app) {
  app.use('/news', newsRouter)
  app.use('/', siteRouter)
  app.use('/courses', coursesRouter)
  app.use('/me', meRouter)
  app.use('/home',homeRouter)
}

module.exports = route;