import {createSongs} from "./songs-creator";
import {SongComponent} from "./song/song-component";
import {useState} from "react";

export const Songs: React.FC = () => {
    const [pickedSong, setPickedSong] = useState("");

    const songs = createSongs();

    const onSongChange = (event: any): void => {
        if (event.target && event.target.value) {
            setPickedSong(event.target.value);
        }
    }

    return (
        <div>
            {songs.map((song, index) => {
                return <SongComponent
                    key={index}
                    title={song.title}
                    isChecked={song.title === pickedSong}
                    onChange={onSongChange}
                    songsInfo={song.toSongProps()}/>
            })}
        </div>
    )
}