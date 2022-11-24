const Course = require('../models/Course')
const {mutipleMongooseToObject} = require('../../untils/mongoose')

class MeController {
 storedCourses(req, res,next){
  Course.find({})
    .then(courses => res.render('me/stored-courses', {courses: mutipleMongooseToObject(courses)}))
    .catch(next)
 }
 storedCoursesData(req, res,next){
  Course.find({})
    .then(courses => res.status(200).json(courses))
    .catch(next)
 }
}

module.exports = new MeController();
