let mongoose = require('mongoose')

let User = new mongoose.Schema({
  username: {type: String,
    default: ''},
  email: {type: String,
    default: ''},
  password : {type: String,
    default: ''},
  password_2: {type: String,
    default: ''},
  group: {type: String,
    default: ''}
})

module.exports = mongoose.model('User', User)