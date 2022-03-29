import React, {Fragment, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import PhotoForm from '../components/PhotoForm';
import {getPhotos, reset} from '../features/photos/photoSlice'
import PhotoItem from '../components/PhotoItem'
function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {user} = useSelector((state) => state.auth)
  const {photos, isLoading, isError, message} = useSelector((state) => state.photos)

  useEffect(() => {
    if(isError) {
      console.log(message)
    }
    if(user === null) {
      navigate('/login')
    }

    dispatch(getPhotos());

    return () => { dispatch(reset())}
  }, [user, navigate, isError, message, dispatch])
  
  if(isLoading) { 
    return <h1> LOADING... </h1>
  }
  return (
    <Fragment>
      
      <section className="form">
        <PhotoForm />
      </section>
      <section className="heading">
        <p>your photos</p>
      </section>
      <section>
        {photos.length > 0 ? (
          <div className="goals">
            {photos.map((photo) => (
              <PhotoItem key={photo._id} photo={photo}/>
            ))}
            
          </div>
        ) : (<h3>No photos yet</h3>)}
      </section>
    </Fragment>
  )
}

export default Home