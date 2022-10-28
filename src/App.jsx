import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Chats from "./pages/Chats";
import Profile from "./pages/Profile";
import NoPage from "./pages/NoPage";

import './index.css'
import './App.css';

export default function App() {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  return (
    <>
    <header style={myStyle}>
      <h1>My fouth React page</h1>
      {/* 
      <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/chats">Chats</Link>
      </li> 
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      </ul>
      */}
    </header>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />}>
          <Route path="chats" element={<Chats />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NoPage />} />
        </Route>
  
      </Routes>
    </BrowserRouter>
    </>
  );
}
