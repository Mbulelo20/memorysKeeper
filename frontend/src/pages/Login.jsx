import React, {useState, Fragment, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../features/auth/authSlice'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const {  email, password,  } = formData
 
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if (isError) {
        toast.error(message)
        }

        if (isSuccess || user) {
        navigate('/')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])
    const onSubmit  = (e) => {
        const userData = {
            email,
            password,
          }
    
        dispatch(login(userData))
    }

    const onChange = (e) => {
      setFormData((formData) => ({
          ...formData,
          [e.target.name]: e.target.value,
        }))
    }

    if(isLoading){
        return <h1>LOADING...</h1>
    }
  return (
    <Fragment>
        <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and start saving your photos</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </Fragment>
  )
}

export default Login