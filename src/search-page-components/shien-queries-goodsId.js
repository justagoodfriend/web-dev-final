import axios from "axios";
export const SHEIN_API = "https://unofficial-shein.p.rapidapi.com/";
export const SHEIN_KEY = process.env.REACT_APP_RAPIDAPI_KEY;
export const SHEIN_HOST = process.env.REACT_APP_RAPIDAPI_HOST;

//  SORT : 0-Recommend|7-Top rated|8-Most popular|9-New arrivals|10-Price low to high|11-Price high to low
const randomValue = [0, 7, 8][Math.floor(Math.random() * 3)];

const querySearchByGoodsID = async (goods_id) => {
    const response = await axios.get(`${SHEIN_API}products/detail?goods_id=${goods_id}&language=en&country=US&currency=USD`, {
        headers: {
            'X-RapidAPI-Key': SHEIN_KEY,
            'X-RapidAPI-Host': SHEIN_HOST
        }
    });
    return await response.data;
}

export default querySearchByGoodsID;