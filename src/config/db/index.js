const mongoose = require('mongoose');


async function connect() {
  try{
    await mongoose.connect('mongodb://localhost:27017/devplus_product', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
      console.log("Connect successfully");
  } catch (error){
      console.log("connect failed")
  }
}
  
module.exports = {connect}
