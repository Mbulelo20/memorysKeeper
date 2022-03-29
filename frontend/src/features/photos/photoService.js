import axios from 'axios';
const API_URL = '/api/photos';

const uploadPhoto = async (photoData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, photoData, config);

    return response.data;
}

const getPhotos = async ( token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config);

    return response.data;
}

const deletePhoto = async ( photoId,token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + photoId, config);

    return response.data;
}

const photoService = {
    uploadPhoto,
    getPhotos,
    deletePhoto
}

export default photoService;