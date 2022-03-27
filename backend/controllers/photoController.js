const ayncHandler = require('express-async-handler');

const PhotoObject = require('../models/photoModel');

const getPhotos = ayncHandler(async (req, res) => {

    try {
        const photos = await PhotoObject.find()
        res.status(200).json(photos)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

const uploadPhoto = ayncHandler(async (req, res) => {  
    if(!req.body.file) {
        res.status(400)
        throw new Error('Please select a file')
    }  

    const photoObject = await PhotoObject.create({
        file: req.body.file,
        tags: req.body.tags
    })
    res.status(200).json(photoObject)
})

const updatePhoto = ayncHandler(async (req, res) => {
    const photoObject = await PhotoObject.findById(req.params.id)

    if(!photoObject) {
        res.status(400);
        throw new Error("File not found!");
    }

    updatedPhotoObject = await PhotoObject.findByIdAndUpdate(req.params.id, req.body, {new: true})
    
    res.status(200).json(updatedPhotoObject)

})

const deletePhoto = ayncHandler(async (req, res) => {
    const photoObject = await PhotoObject.findById(req.params.id)

    if(!photoObject) {
        res.status(400);
        throw new Error("File not found!");
    }

    await photoObject.remove();
    res.status(200).json({id: req.params.id})

})

module.exports = {
    getPhotos, 
    uploadPhoto, 
    deletePhoto, 
    updatePhoto
}