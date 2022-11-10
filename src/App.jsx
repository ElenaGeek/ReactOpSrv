import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Chats from "./pages/Chats";
import Topics from "./pages/Topics";
import Profile from "./pages/Profile";
import NoPage from "./pages/NoPage";
import News from "./pages/News";

import './index.css'
import './App.css';

export default function App() {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    margin: "5px",
    fontFamily: "Sans-Serif"
  };
  return (
    <div className="app">
      <BrowserRouter>
      <header style={myStyle}>
      <h1>My fouth React page</h1>  
        <nav>
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/chats">Chats</Link></li>
          <li><Link to="/topics">Topics</Link></li>
          <li><Link to="/profile">Profile</Link></li><br></br>
          <Link to="/route-a">NewsA     </Link>
          <Link to="/route-b">NewsB     </Link>
          <Link to="/route-a/1">RouteToNewsA1    </Link>
          <Link to="/route-a/2">RouteToNewsA2    </Link>
          <Link to="/route-b/1">RouteToNewsB1    </Link>
          <Link to="/route-b/2">RouteToNewsB2    </Link>
          </ul>
        </nav>
        </header>
        <Routes>
          <Route
            path="/route-b"
            element={<News title="News B" />}
          />
          <Route
            path="/route-a"
            element={<News title="News A" />}
          />
          <Route
            path="/route-b/:id"
            element={<News title="Id" />}
          />
          <Route
            path="/route-a/:id"
            element={<News title="Route" />}
          />
          <Route path="/" element={<Home />} /> 
          <Route 
            path="topics/:id" element={<Topics/>} />
          <Route path="profile" element={<Profile />} />
          <Route path="chats" element={<Chats />} />  
          <Route path="*" element={<NoPage />} />
          <Route path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
