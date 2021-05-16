import {Song} from "./song/song";
import {EmbeddedSong} from "./embedded-song";


export const createSongs = (): Song[] => {
    return [
        new Song("Walk The Moon", "Shut up and dance", 2014, "Canada", new EmbeddedSong("https://open.spotify.com/embed/track/4kbj5MwxO1bq9wjT5g9HaA")),
        new Song("The Rembrandts", "Ill be there for you", 1995, "Germany", new EmbeddedSong("https://open.spotify.com/embed/track/15tHagkk8z306XkyOHqiip")),
        new Song("Queen", "Dont stop me now", 1979, "UK", new EmbeddedSong("https://open.spotify.com/embed/track/5T8EDUDqKcs6OSOwEsfqG7")),
        new Song("Beyonce", "Crazy in love", 2003, "Germany", new EmbeddedSong("https://open.spotify.com/embed/track/5IVuqXILoxVWvWEPm82Jxr")),
    ];
};