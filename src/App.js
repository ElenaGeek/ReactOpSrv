import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
//import { useDispatch } from 'react-redux'
import './App.css';
// import './style.scss'
//import axios from 'axios';

//import * as postActions from './redux/actions/postAC'

import Navbar from './components/Navbar/Navbar'
import PageHome from './pages/Home/PageHome'
import PagePost from './pages/Post/PagePost'
import PageInfo from './pages/Info/PageInfo'
import PageCards from './pages/Cards/PageCards'
import PageProfile from './pages/Profile/PageProfile'
import Articles from './pages/Articles/PageArticles'
import Signin from './pages/Signin/PageSignin'
import Signup from './pages/Signup/PageSignup'

function App () {
  //const dispatch = useDispatch();

  useEffect(() => {
    // axios.get('http://localhost:3001/posts')
    //   .then((postFromServer) => {
    //     console.log(postFromServer)
    //     if (postFromServer.data.allPosts.length) {
    //       dispatch(postActions.setAllPosts(postFromServer.data.allPosts))
    //     }
    //   })
  }, [])

  console.log('App');

  return (
    <div className="App">
      <h1>My 8th React page</h1>  
      <header className="App-header">
        <Navbar />
      </header>
      <section className="list App-content">
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="form" element={<PagePost />} />
          <Route path="posts">
            <Route path="list" element={<PageCards />} />
            <Route path=":myId" element={<PageInfo />} />
          </Route>
          <Route path="profile" element={<PageProfile />} />
          <Route path="articles" element={<Articles />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />

          <Route path="*" element={<h2>404 Page not found</h2>} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
