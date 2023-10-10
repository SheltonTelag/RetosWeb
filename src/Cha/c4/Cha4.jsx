import GifItem from './GifItem'
import GetGif from './GetGif'
import { useEffect, useState } from 'react'

const Cha4 = ({category}) => {

    const [images, setImages] = useState([])

    const getImages = async() => {
        const images = await GetGif(category)      
        setImages(images)
    }

    useEffect( ()=> {
        getImages();
    },[]
    )

    return <>
        <h3>{category}</h3>
        <div className='card-grid'>
            {
                images.map ( (image, key) => {
                    return <GifItem key={key} {...image}></GifItem>
                })
            }
        </div>
    </>

}

export default Cha4