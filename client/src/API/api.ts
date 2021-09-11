import axios from "axios";
import {Song} from "../models/song";

const WEDDING_SURVEY_SERVER = "http://localhost:8080";

export const SONGS_API = axios.create({
    baseURL: WEDDING_SURVEY_SERVER,
});


export class SongsAPI {
    public static async getSongs(): Promise<Song[]> {
        try {
            const response = await SONGS_API.get("/get-songs");

            if (response && response.status === 200) {
                return response.data as Song[];
            }

        } catch (err) {
            console.error("Failed to fetch songs", err);
        }

        return [];
    }

    public static async submitChoice(songId: number): Promise<boolean> {
        try {
            const response = await SONGS_API.put(`/song/${songId}/update`);

            return response.status === 200;

        } catch (err) {
            console.error("Failed to submit song choice", err)
        }

        return false;
    }
}