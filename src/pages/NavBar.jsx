import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  // const navigate = useNavigate()

  return (
    <>
    <div className='btn-group mt-3'>
      <Link to="/" className="btn btn-light">Home    </Link>
      <Link to="/form" className="btn btn-light">Post    </Link>
      <Link to="/posts/list" className="btn btn-light">Cards    </Link>
    </div>
    </>
  )
}