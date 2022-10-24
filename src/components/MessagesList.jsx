import { TextField } from '@mui/material';
import { useState, useCallback } from "react";

export const MessagesList = ({ messages }) => {
    const [value, setValue] = useState("");
    const handleChange = useCallback((e) => {
        setValue(e.target.value);
        }, []);
    return (
      <ul>
        {messages.map((message, idx) => (
          <li key={idx}>
            {message.author}: {message.value}
          </li>
        ))}
        <TextField
        style={{ margin: '20px' }}
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={value}
        onChange={handleChange}
    />
      </ul>
      
    );
  };