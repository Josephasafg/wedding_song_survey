import {DISCOGS_API} from "./api";
import {SearchResult} from "./types/discogs-types";

export class DiscogsRequests {
    public static async searchSong(songInfo: any): Promise<SearchResult> {
        const response = await DISCOGS_API.get("/database/search", {params: songInfo});

        if (response.data && response.data.results) {
            return response.data.results[0];
        }

        throw new Error()
    }
}