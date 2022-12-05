import React from 'react'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import * as actionsPost from '../store/actions/postAC'

export default function Item({item}) {
  console.log('Item')
  const dispatch = useDispatch();
  const handlerDelete = (myId) => {
    dispatch(actionsPost.removePost({ myId }))
  }

  const addLike = (myId) => {
    dispatch(actionsPost.addLikePost({ myId }))
  }
    console.log('item.myId', item.myId)

  return (
    <>
      <div className="card" style={{width: '18rem'}}>
        <img src="/images/3.png" className="card-img-top" alt="..." />
        <div className="card-body">
          {
            item.check ?
            <p className="card-text">Colourful gift</p> :
            <p className="card-text">Colourful gift</p>
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
