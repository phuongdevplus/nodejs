class NewController {
  // [GET] /news
  index(req, res) {
    res.render('news');
  }
  // [GET] /news/:slug

  show(red, res) {
    res.send('New DETAIL!!!');
  }
}

module.exports = new NewController();
