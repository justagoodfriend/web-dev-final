import axios from "axios";
export const SHEIN_API = "https://unofficial-shein.p.rapidapi.com/";
export const SHEIN_KEY = process.env.REACT_APP_RAPIDAPI_KEY;
export const SHEIN_HOST = process.env.REACT_APP_RAPIDAPI_HOST;

//  SORT : 0-Recommend|7-Top rated|8-Most popular|9-New arrivals|10-Price low to high|11-Price high to low
const randomValue = [0, 7, 8][Math.floor(Math.random() * 3)];

const querySearch = async (query) => {
    const response = await axios.get(`${SHEIN_API}products/search?keywords=${query}&language=en&country=US&currency=USD&sort=${randomValue}&limit=18&page=1`, {
        headers: {
            'X-RapidAPI-Key': SHEIN_KEY,
            'X-RapidAPI-Host': SHEIN_HOST
        }
    });
    return await response.data;
}

export default querySearch;