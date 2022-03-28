const express = require('express');
const router = express.Router();
const {getPhotos, uploadPhoto, updatePhoto, deletePhoto} = require('../controllers/photoController');
const {protect} = require('../middleware/authMiddleware.js');

router.get('/', protect, getPhotos);

router.post('/', protect, uploadPhoto);

router.put('/:id', protect, updatePhoto);

router.delete('/:id', protect, deletePhoto);

module.exports = router;