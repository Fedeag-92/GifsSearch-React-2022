export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=iBDpgJQi2wOXLDzeyzjUh79Qt6VB3Eho&q=${category}&limit=10`;

    const response = await fetch(url);

    const { data } = await response.json();

    const gifs = data.map(({ id, title, images }) => ({
        id,
        title,
        url: images.downsized_medium.url
    }))

    return gifs;
}