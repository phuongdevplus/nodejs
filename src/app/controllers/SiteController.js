const Course = require('../models/Course')


class SiteController {
  // [GET]
  index(req, res, next) {
    // res.render('home')
    Course.find({})
    .then(courses => res.render('home',{
      courses: courses
    }))
    .catch(err => next(err))
    
    // res.json({ name: 'test'})
  }
  // [GET] /search

  search(red, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
