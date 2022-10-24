import { useState } from 'react';
import { AUTHOR } from './Author';
import { Button } from './Button';

import style from './Form.module.css'

export const Form = ({ addMessage }) => {
  const [value, setValue] = useState('');
  const name = 'Please input new name';

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addMessage({
      author: AUTHOR.user,
      value,
    });
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
    <p>{name}</p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <Button label="send" disabled={!value} />
    </form>
  );
};

