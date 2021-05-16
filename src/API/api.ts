import axios, {AxiosRequestConfig} from "axios";

const DISCOGS_TOKEN = "KKfUXOscwJVXgpxbmYpgMLUecHINICyAnAZMpnGH";
const BASE_DISCOGS_URL = "https://api.discogs.com";

export const DISCOGS_API = axios.create({
    baseURL: BASE_DISCOGS_URL,
    params: {token: DISCOGS_TOKEN}
});

//
// DISCOGS_API.interceptors.request.use((request: AxiosRequestConfig) => {
//         debugger;
//         request.params["token"] = DISCOGS_TOKEN;
//         return request;
//     },
//     error => {
//         throw error;
//     });