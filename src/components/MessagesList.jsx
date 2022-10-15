import { useState } from 'react';

export function MessagesList() {
const [messages, setMessages] = useState([
"Fisrt message",
"Second message",
"Third message",
]);
return messages.map((message) => <div>{message}</div>);
}