import React, { useState } from 'react';

const Challenge2 = () => {

    const [counter, setCounter] = useState(0);

    const sumar = () => {
        setCounter(counter+1)
    }
    const restar = () => {
        setCounter(counter-1)
    }
    const reseteo = () => {
        setCounter(0)
    }

    return <>
        <h1>Challenge 2</h1>
        
        <span> {counter} </span>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Sumar</button>
        <button onClick={() => reseteo()}>reset</button>
    </>
}

export default Challenge2