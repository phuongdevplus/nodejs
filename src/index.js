

const express = require('express')
const app = express()
const {engine} = require('express-handlebars');
const path = require('path');
const port = 3000
const morgan = require('morgan')
app.use(morgan('combined'))


app.use(express.static(path.join(__dirname,'public')))
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
})
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})