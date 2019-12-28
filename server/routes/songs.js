const router = require('express').Router();
let Song = require('../models/song.model');
let Artist = require('../models/artist.model');

//Get all songs
router.route('/').get((req, res) => {
  Song.find().sort('title')
    .then(songs => res.json(songs))
    .catch(err => res.status(400).json('Error: ' + err));
})

//New song
router.route('/add').put((req, res) => {
  newSong = new Song(req.body);

  newSong.save()
    .then(() => res.json(newSong))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:artist_id/:song_id').get((req, res) => {
  Artist.findById(req.params.artist_id)
    .then(song => res.json(song));
});

router.route('/:id').delete((req, res) => {
  Song.findByIdAndDelete(req.params.id)
    .then(() => res.json('Song deleted.'))
    .catch(err => console.log(err));
});

module.exports = router;