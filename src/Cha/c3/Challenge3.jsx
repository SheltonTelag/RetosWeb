import React, { useState } from 'react';

const Challenge3 = () => {

    const [categories, setCategories] = useState (['primer'])
    const [category, setCategory] = useState('')


    const agregar = () => {
        if (category.trim() !== '') { 
            setCategories(list => [...list, category])
            setCategory('')
        }
    }
    const capturar = (evt) => {
        setCategory(evt.target.value)
    }

    return <>
        <h1>Challenge 3</h1>

        <input type='text' value={category} onChange={(e) => capturar(e)}/>
        <button onClick={() => agregar()}>Agregar</button>

        <ol>
            {
                categories.map(
                    (category, key) => {
                        return <li key={key}>{category}</li>
                    }
                )
            }
        </ol>
        
       
    </>
}

export default Challenge3