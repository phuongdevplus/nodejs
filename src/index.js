const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const path = require('path');
const port = 5000;
const route = require('./routes');
const morgan = require('morgan');
const db = require('./config/db')
const methodOverride = require('method-override')
const cors = require('cors');

const {deleteFile} = require('./middlewares/MulterMiddleWare')

// deleteFile('C:\Users\Phương\Desktop\devplus\nodejs\src\assets\images\basic_1669034522965_Screenshot 2022-10-21 183356.png')
app.use(express.json());
app.use(methodOverride('_method'))
app.use(cors())
db.connect();
route(app);
app.use(morgan('combined'));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.static(path.join(__dirname, 'public')));
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    helpers:{
        sum:(a,b) => a + b,
    }
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
