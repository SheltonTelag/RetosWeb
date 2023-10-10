const GetGif = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=ksxAu2lccua0PgAQ5p4OS97Y2Z55L32g&q=${category}&limit=2&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const resp = await fetch( url)
    const { data } = await resp.json()
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.fixed_height_downsampled.url
        }
    })
    return gifs
}
export default GetGif