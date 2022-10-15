import { Form } from './components/Form';
import { MessagesList } from './components/MessagesList';

import './index.css'
import './App.css';

export const App = () => {

  return(
    <div className="App">
    <header className="App-header">
      My second React page
       <h4>What is next?</h4>
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
      </a>
    <Form />
    <MessagesList />

    </header>
    </div>
  );
 
};

export default App;
