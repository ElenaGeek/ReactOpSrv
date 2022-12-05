import { Routes, Route, useParams, Link} from "react-router-dom";
import { useState} from "react";
import News from "./News";

const Chats = () => {
const {chatId} = useParams();

console.log(chatId +'id из useParams')

const [chats, setChats] = useState([
    {
      id:'Chat1',
      messages:["message1"]
    },
    {
      id:'Chat2',
      messages:["message2"]
    }
  ])

  const id =chats.findIndex(x => x.id === chatId)

    return (
      <>
      <h1>All Chats {id} </h1>
     
      <ul>
          <li><Link to="/chats/1">Chat1</Link></li>
          <li><Link to="/chats/2">Chat2</Link></li>
          <li><Link to="/chats/3">Chat3</Link></li>
      </ul>    
      <Routes>
          <Route path="/chats/1" element={<News title="id"/>} /> 
      </Routes>
    
      </>   
    );
  };

  export default Chats;

  /*
  const ChatList =({chats}) =>{
    return (
      <>
      {chats.map((e,id) => 
        <div key={id}>
          <p>X</p>
          <Link to={'{id}'}>{e.recipient}</Link>
        </div>
      )}
      </>
    );   
  };
  */   

/*  
  const CompA = () => <div style={{height:'50vh', backgrownd: '#ed8551', width: '50%' }}>Chat1</div> 
  const CompB = () => <div style={{height:'50vh', backgrownd: '#b9b9b9', width: '50%' }}>Chat2</div> 
  const CompC = () => <div style={{height:'50vh', backgrownd: '#c9c9c9', width: '50%' }}>Chat3</div> 
*/