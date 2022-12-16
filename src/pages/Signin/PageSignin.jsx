import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {auth} from '../../redux/actions/profileAC'

export default function Signin() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [inputs, setInputs] = useState({login: '', password: ''})
  const [error, setError] = useState(false)

  const handleInputs = (e) => {
    console.log(e.target.value)
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const handlerForm = (event) => {
    event.preventDefault()
    if(inputs.login === 'gb' && inputs.password === 'gb') {
      dispatch(auth(true))
      navigate('/profile')
    } else {
      setError(true)
    }
    setInputs({login: '', password: ''})
  }

  return (
   <>
    <h1>Signin Page</h1>
    <form onSubmit={handlerForm}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Login</label>
          <input 
            type="text" 
            className="form-control" 
            id="exampleInputEmail1"
            name='login'
            onChange={handleInputs}
            value={inputs.login ?? ''}
            aria-describedby="emailHelp" 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input 
            type="text" 
            name="password"
            className="form-control"
            onChange={handleInputs}
            value={inputs.password ?? ''}
            id="exampleInputPassword1" 
          />
        </div>
      <button type="submit" className="btn btn-primary">Signin</button>
    </form>
    {error && <p style={{color: 'red'}}>Login or password is FALIED</p>}
   </>
  )
}
