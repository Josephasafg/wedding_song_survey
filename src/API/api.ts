import axios from "axios";

const DISCOGS_TOKEN = "KKfUXOscwJVXgpxbmYpgMLUecHINICyAnAZMpnGH";
const BASE_DISCOGS_URL = "https://api.discogs.com";

export const DISCOGS_API = axios.create({
    baseURL: BASE_DISCOGS_URL,
    params: {token: DISCOGS_TOKEN}
});
