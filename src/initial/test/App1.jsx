import { Form } from './components/Form';
import { Child } from './components/Child';
import { Message } from './components/Message';
import { useState } from 'react';

import './index.css'
import './App.css';

export const App = () => {
  const [name, setName] = useState('Elena')
  const [count, setCount] = useState(0)
  const mytext = "Good Morning"
  const handleChangeName = (ev) => {
    setName(ev.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        My first React page
        <p className="App-text" >
          Hello, <Child name={name}/>
        </p>
      <> 
	    <h3>What is next?</h3>
      <Message name={mytext}/>
      </>
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
      </a>
     
      <h3>Parent component</h3>
      <input onChange={handleChangeName} />
      <hr />
      <Form />
      <h3>Child component</h3>
      <p>{count}</p>
      <Child name={name} handleChangeCount={setCount} />
      </header>
    </div>
  );
}

export default App;
