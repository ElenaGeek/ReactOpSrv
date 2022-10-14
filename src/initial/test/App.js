//import {Message} from './components/Message'
//import {useState} from 'react';
import './App.css';

//export const App = () => {
//  const myText = <Message myText="Hi" />;
//const myText = useState('Hi')
//}

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        My first React page
        <p className="App-text" >
          Hello, {props.name}
        </p>
      <> 
	    <h3>What is next?</h3>
    
      </>
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
      </a>
      </header>
    </div>
  );
}

export default App;
