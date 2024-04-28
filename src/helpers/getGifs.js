export const getGifs = async( categoria ) => {
    const key = 'IiDii9qI0iiOZwjbawDVWJz9snrhHQ8m';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ key }&q=${ categoria }&limit=10`;
    const rsp = await fetch( url );
    const { data } = await rsp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    //console.log(gifs)
    return gifs;
}