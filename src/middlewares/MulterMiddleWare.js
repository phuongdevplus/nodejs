const multer = require('multer')
const fs = require('fs')

const day = new Date();
const thang = ['1','2','3','4','5','6','7','8','9','10','11','12']
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, `${__dirname}/../assets/images`);
  },
  filename: function (req, file, callback) {
    callback(null, 'basic'+ "_" + day.getDate()+"-"+thang[day.getMonth()]+"-"+day.getFullYear()+"_"+file.originalname);
  },
})

const deleteFile = (filePath) => {
  fs.unlink(filePath, () => {
    console.log("file deleted");
  });
};
 
const upload = multer({ storage: storage })

module.exports = upload, deleteFile