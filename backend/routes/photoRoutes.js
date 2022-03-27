const express = require('express');
const router = express.Router();
const {getPhotos, uploadPhoto, updatePhoto, deletePhoto} = require('../controllers/photoController');

router.get('/', getPhotos);

router.post('/', uploadPhoto);

router.put('/:id', updatePhoto);

router.delete('/:id', deletePhoto);

module.exports = router;