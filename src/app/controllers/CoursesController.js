const Courses = require('../models/Course')
const { mongooseToOject } = require('../../untils/mongoose')
const { uploadFileDriver, deleteFileDriver } = require('../models/Upload.model')
const { deleteFile } = require('../../middlewares/MulterMiddleWare')
class CoursesController {
  // [GET
  create(req, res) {
    res.render('courses/create');
  }

  show(req, res, next) {
    Courses.findOne({ slug: req.params.slug })
      .then(course => {
        res.json(course)
      })
      .catch(next)
  }


  store(req, res, next) {
    const formData = req.body
    const courses = new Courses(formData)
    console.log(formData)
    courses.save()
      .then(() => res.redirect('/'))
      .catch(err => {

      });
  }
  edit(req, res, next) {
    Courses.findById(req.params.id)
      .then(course => res.render('courses/edit', {
        course: mongooseToOject(course)
      }))
      .catch(next)
  }
  // [PUT] /Course/:id
  update(req, res, next) {
    Courses.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next)
  }
  uploadFile(req, res, next) {
    const { body, file } = req
    console.log(body, file)
    
    if(file){
      uploadFileDriver({ shared: true }, file)
      .then(result => {
        const formData = {
          ...body,
          img: result.data.webContentLink
        }
        const courses = new Courses(formData)
        console.log(courses)
        courses.save()
          .then(() => res.redirect('/'))
          .catch(err => {
          });
      })
    }else{
      const courses = new Courses(body)
      console.log(courses)
      courses.save()
        .then(() => res.redirect('/'))
        .catch(err => {
        });
    }
    
  }
}


module.exports = new CoursesController();
