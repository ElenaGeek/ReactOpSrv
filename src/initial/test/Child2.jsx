import { useEffect, useState, memo } from 'react';

export const Child = memo(() => {
  const [count, setCount] = useState(0);
  console.log('render child');
  useEffect(() => {
  }, []);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  );
});
