import axios from "axios";
export const SHEIN_API = "https://unofficial-shein.p.rapidapi.com/";
export const SHEIN_KEY = process.env.REACT_APP_RAPIDAPI_KEY;
export const SHEIN_HOST = process.env.REACT_APP_RAPIDAPI_HOST;

//  CATEGORY : 0-Recommend|7-Top rated|8-Most popular|9-New arrivals|10-Price low to high|11-Price high to low
const homeQuerySearch = async (query, limit, category) => {
    const response = await axios.get(`${SHEIN_API}products/search?keywords=${query}&language=en&country=US&currency=USD&sort=${category}&limit=${limit}&page=1`, {
        headers: {
            'X-RapidAPI-Key': SHEIN_KEY,
            'X-RapidAPI-Host': SHEIN_HOST
        }
    });
    return await response.data;
}

export default homeQuerySearch;