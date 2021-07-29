const mongoose = require('mongoose');
const {Schema} = mongoose;

const ClientShema = new Schema({
  name : {type: String , required: true},
  email : {type: String, required: true},
  phone: {type: String, required: true},
  ci: {type:String, required: true},
  date : {type: String, required: true},
  attention : {type: String, requiered: false}
  
});

module.exports = mongoose.model('Client', ClientShema)