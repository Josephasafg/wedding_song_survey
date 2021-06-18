import "./songs.css";
import {SongComponent} from "./song/song-component";
import {useContext} from "react";
import {Song} from "../../models/song";
import {SongSubmissionContext} from "../../App";

interface SongsProps {
    songs: Song[]
}

export const Songs: React.FC<SongsProps> = (
    {
        songs
    }
) => {
    const songContext = useContext(SongSubmissionContext);

    const onSongChange = (event: any): void => {
        if (event.target && event.target.value) {
            songContext.updateSong(event.target.value);
        }
    }

    return (
        <div className="songs-wrapper">
            {songs.map((song, index) => {
                return <SongComponent
                    key={index}
                    song={song}
                    isChecked={song.id.toString() === songContext.id.toString()}
                    onChange={onSongChange}/>
            })}
        </div>
    )
}