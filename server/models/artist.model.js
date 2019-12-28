const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  name: { type: String, required: true,},
  image_url: String,
  spotify_id: String,
}, {
  timestamps: true,
});

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;