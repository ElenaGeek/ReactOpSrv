import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
//import { logOut } from '../../services/firebase'

export default function Navbar() {
  const navigate = useNavigate()

//  const hendleLogout = async () => {
//    await logOut()
//    navigate('/signin')
//  }

  return (
    <>
    <div className='btn-group mt-3'>
      <Link to="/" className="btn btn-light">Home      </Link>
      <Link to="/form" className="btn btn-light">Post     </Link>
      <Link to="/posts/list" className="btn btn-light">Cards     </Link>
      <Link to="/profile" className="btn btn-light">Profile     </Link>
      <Link to="/articles" className="btn btn-light">Articles     </Link>
    </div>
    
    </>
  )
}
