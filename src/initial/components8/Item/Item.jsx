import React from 'react'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import axios from 'axios'

import * as postActions from '../../redux/actions/postAC'

export default function Item({item}) {
  console.log('Item')
  const dispatch = useDispatch();
  const handlerDelete = (myId) => {
    axios.post('http://localhost:3001/delete', { myId })
      .then(data => console.log(data))
    dispatch(postActions.removePost({myId}))
  }

  const addLike = (myId) => {
    axios.patch('http://localhost:3001/posts', { myId })
      .then(data => console.log('data LIKE', data))
      dispatch(postActions.addLikePost({myId}))
  }

  return (
    <>
      <div className="card" style={{width: '18rem'}}>
        <img src="/images/pik.gif" className="card-img-top" alt="..." />
        <div className="card-body">
          {
            item.check ?
            <p className="card-text">EEEEee boy</p> :
            <p className="card-text">Yyyyppps</p>
          }
          <h5 className="card-title">{item.title ?? 'Card title'}</h5>
          <p className="card-text">{item.text ?? 'Some quick example'}</p>
          <div className="btn-group">
            <Link to={`/posts/${item.myId}`} className="btn btn-info">Detail</Link>
            <button onClick={() => addLike(item.myId)} className="btn btn-success">Like {item.likes}</button>
            <button onClick={() => handlerDelete(item.myId)} className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </>
  )
}
