let mongoose = require('mongoose')

let Reservations = new mongoose.Schema({
  date: Date,
  breaks : Number,
  player_1: String,
  player_2: String,
  player_3: String,
  player_4: String
})

module.exports = mongoose.model('Reservations', Reservations)