import React, {useState} from 'react'
import { useDispatch} from 'react-redux';
import FileBase from 'react-file-base64';
import {uploadPhoto} from '../features/photos/photoSlice';

const PhotoForm = () => {
    const [formData, setFormData] = useState('')

    const dispatch = useDispatch();
    const onSubmit = (e) => {
        e.preventDefault();
        // const photoOb = {
        //     tags, file
        // }
        dispatch(uploadPhoto(formData))
    }
  return (
    <section className="photo">
        <form onSubmit={onSubmit}>
            <div className='form-group'>
                <FileBase type="file" multiple={false} onDone={({base64}) => setFormData({ file: base64})} />
            </div>
            {/* <div className='form-group'>
                <label htmlFor="text">tags</label>
                <input type="text" name="tags" id="tags" value={formData.tags} onChange={(e) => setFormData( {...formData, tags: e.target.value})}/>
            </div> */}
            <div className="form-group">
                <button type="submit" className="btn btn-block">
                    Upload
                </button>
            </div>
        </form>
    </section>
  )
}

export default PhotoForm;