import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
//import { useDispatch } from 'react-redux'
import './App.css';
// import './style.scss'
// import axios from 'axios';

import NavBar from './pages/NavBar'
import Home from './pages/Home'
import Post from './pages/Post'
import Info from './pages/Info'
import Cards from './pages/Cards'

import './index.css'
import './App.css';

export default function App() {
 // const dispatch = useDispatch();
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    margin: "5px",
    fontFamily: "Sans-Serif"
  };
  useEffect(() => {
    // axios.get('http://localhost:3001/posts')
    //   .then((postFromServer) => {
    //     console.log(postFromServer)
    //     if (postFromServer.data.allPosts.length) {
    //       dispatch(postActions.setAllPosts(postFromServer.data.allPosts))
    //     }
    //   })
  }, [])

  //console.log('App');

  return (
    <div className="app">

    <h1>My 7th React page</h1>  
      <header style={myStyle}>
        <NavBar />
      </header>
      <section className="list App-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="form" element={<Post />} />
          <Route path="posts">
            <Route path="list" element={<Cards />} />
            <Route path=":myId" element={<Info />} />
          </Route>
        </Routes>
      </section>
    </div>
  );
}
