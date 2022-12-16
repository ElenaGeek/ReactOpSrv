import { Form } from './components/Form';
import { MessagesList } from './components/MessagesList';
import { useState, useEffect } from 'react';
import { AUTHOR } from './components/Author';

import './index.css'
import './App.css';

export const App = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (newMessage) => {
    setMessages((prevMesages) => [...prevMesages, newMessage]);
  };

  useEffect(() => {
    if (
      messages.length > 0 &&
      messages[messages.length - 1].author === AUTHOR.user
    ) {
      const timeout = setTimeout(() => {
        addMessage({
          author: AUTHOR.bot,
          value: 'Im BOT',
        });
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [messages]);

  return (
  <div className="App">
    <header className="App-header">
      My third React page
      <MessagesList messages={messages} />
      <Form addMessage={addMessage} />

    </header>
  </div>
  );
};

export default App;
