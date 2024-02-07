import { API_KEY } from "../utils/UTILS.JSX";
import { APIURL } from "../utils/UTILS.JSX";

export const getGifs = async (category) => {
    const url = `${APIURL}?api_key=${API_KEY}&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;

}
