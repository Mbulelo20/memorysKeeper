import React from 'react';
import {BsTrash} from 'react-icons/bs';
import {useDispatch} from 'react-redux';
import {deletePhoto} from '../features/photos/photoSlice';

const PhotoItem = ({photo}) => {
    const dispatch = useDispatch();
  return (
      <div style={userStyle} >
        <div class="card text-center" style={{transition: '0.7s', width: '300px'}}>
            <img  src={photo.file} alt="yourphoto" style={{width: '90%'}}/>
            <div class="container" style={{padding: '2px, 16px'}}>
                <h4>{new Date(photo.createdAt).toLocaleString('en-ZA')}</h4> 
                <BsTrash onClick={() => dispatch(deletePhoto(photo._id))}/>
            </div>  
        </div>
      </div>  
    
  )
}

const userStyle ={
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '3px',
    marginTop: '5em', 
    gridRows: 'auto',
  }
  
export default PhotoItem