import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actionsPost from '../store/actions/postAC'
// import {setPost} from '../../store/features/postSlice'
// import {clearInputPost, postTyping} from '../../store/features/inputPostSlice'

import Form from '../components/Form/Form'

export default function Post() {

  const inputs = useSelector(store => store.postInputs)
  //console.log(inputs)
  const dispatch = useDispatch()

  const handlerForm = (event) => {
    event.preventDefault()
    console.log('Submit form')
    dispatch(actionsPost.setPost({
      myId: Math.round(Math.random() * 99),
      title: inputs.title,
      text: inputs.text,
      likes: 0,
      check: inputs.check
    }))
    dispatch(actionsPost.clearInputPost({ title: '', text: '', check: false }))
  }

  const handleInputs = (event) => {
    console.log('event.target',event.target.name, event.target.checked)
    dispatch(actionsPost.postTyping({ [event.target.name]: event.target.value, check:  event.target.checked}))
  }

  return (
    <>
      <h1>Page - create my post</h1>
      <Form handlerForm={handlerForm} handleInputs={handleInputs} inputs={inputs} />
    </>
  )
}