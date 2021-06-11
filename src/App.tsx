import React, {createContext, useEffect, useState} from 'react';
import './App.css';
import {Songs} from "./components/songs/songs";
import {SubmitButton} from "./components/submit-button/submit-button";
import {SongsAPI} from "./API/api";
import {Song} from "./models/song";

const HELP_US_TEXT = "בבקשה תעזרו לנו לבחור שיר לשבירת הכוס!";

export const SongSubmissionContext = createContext({
    id: -1, updateSong: (_: number) => {
    }
});

function App() {
    const [songs, setSongs] = useState<Song[]>([]);
    const [pickedSong, setPickedSong] = useState(-1)

    const onSubmit = async () => {
        await SongsAPI.submitChoice(pickedSong)
    }

    async function fetchSongs() {
        const songs = await SongsAPI.getSongs();
        setSongs(songs);
    }

    useEffect(() => {
        fetchSongs();
    }, [])


    return (
        <SongSubmissionContext.Provider value={{updateSong: setPickedSong, id: pickedSong}}>
            <div className="App">
                <div className="help-us-header">
                    <header>{HELP_US_TEXT}</header>
                </div>
                <Songs songs={songs}/>
                <SubmitButton onClick={onSubmit}/>
            </div>
        </SongSubmissionContext.Provider>
    );
}

export default App;
