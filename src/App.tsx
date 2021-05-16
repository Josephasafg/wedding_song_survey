import React, {useState} from 'react';
import './App.css';
import {Song} from "./components/songs/song/song";

const SONG_TITLES = [
    "Shut up and Dance - Walk the Moon",
    "I'll be there for you - The Rembrandts",
    "Don't Stop Me Now - Queen"
];

const SONGS = [
    {
        artist: "walk the moon",
        track: "Shut up and dance",
        year: 2014,
        page: 1,
        perPage: 1,
        label: "RCA"
    },
    {
        artist: "The Rembrandts",
        track: "Ill be there for you",
        year: 1995,
        page: 1,
        perPage: 1,
        country: "Germany"
    },
    {
        artist: "Queen",
        track: "Dont stop me now",
        year: 1979,
        page: 1,
        perPage: 1,
        country: "UK"
    }
]


function App() {
    const [pickedSong, setPickedSong] = useState(0);

    const onSongChange = (event: any): void => {
        if (event.target && event.target.value) {
            if (SONG_TITLES.includes(event.target.value)) {
                setPickedSong(SONG_TITLES.findIndex(songName => songName === event.target.value));
            }
        }
    }

    return (
        <div className="App">
            <Song title={SONG_TITLES[0]}
                  isChecked={0 === pickedSong}
                  onChange={onSongChange}
                  songsInfo={SONGS[0]}/>

            <Song title={SONG_TITLES[1]}
                  isChecked={1 === pickedSong}
                  onChange={onSongChange}
                  songsInfo={SONGS[1]}/>

            <Song title={SONG_TITLES[2]}
                  isChecked={2 === pickedSong}
                  onChange={onSongChange}
                  songsInfo={SONGS[2]}/>
        </div>
    );
}

export default App;
