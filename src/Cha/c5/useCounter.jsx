import { useState } from 'react';

const useCounter = (initialValue) => {

  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset
  };
};

export default useCounter;

//se invocará desde challenge2 