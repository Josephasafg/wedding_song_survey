import {Song} from "./song/song";

export const createSongs = (): Song[] => {
    return [
        new Song("Walk The Moon", "Shut up and dance", 2014, "Canada"),
        new Song("The Rembrandts", "Ill be there for you", 1995, "Germany"),
        new Song("Queen", "Dont stop me now", 1979, "UK"),
    ];
};