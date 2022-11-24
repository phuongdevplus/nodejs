const HomeSlide = require('../models/HomeSlide')
const HomeText = require('../models/HomeText')
const Course = require('../models/Course')
const {uploadFileDriver} = require('../../app/models/Upload.model')
class homeController {
  // [GET]
  showSlide(req, res, next) {
    HomeSlide.find({})
      .then(course => {
        res.json(course)
      })
      .catch(next)
  }
  postSlide(req, res, next) {
    // console.log(req.body)
    HomeSlide.create({
      img: req.body.img,
      name: req.body.name
    })
    .then(course => {
      res.json(course)
    })
    .catch(next)
  }
  showText(req, res, next) {
    Course.find({})
      .then(course => {
        res.json(course)
      })
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
        const courses = new HomeSlide(formData)
        courses.save()
          .then(() => res.redirect('/'))
          .catch(err => {
          });
      })
    }else{
      const courses = new HomeSlide(body)
      console.log(courses)
      courses.save()
        .then(() => res.redirect('/'))
        .catch(err => {
        });
    }
    
  }
  // uploadFile(req, res, next) {
  //   const { body, file, route } = req
  //   const mongooModel = route.path.slice(1,route.path.length)
  //   console.log(mongooModel)
  // }
}


module.exports = new homeController();
