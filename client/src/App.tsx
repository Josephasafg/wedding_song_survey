import React, {createContext, useState} from 'react';
import './App.css';
import {SongsAPI} from "./API/api";
import {ThankYouPage} from "./components/thank-you-page/thank-you-page";
import {MainPage} from "./components/main-page/main-page";


export const SongSubmissionContext = createContext({
    id: -1, updateSong: (_: number) => {
    }
});

function App() {
    const [pickedSong, setPickedSong] = useState(-1);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const onSubmit = async () => {
        const hasSuccessfulSubmission = await SongsAPI.submitChoice(pickedSong);
        setHasSubmitted(hasSuccessfulSubmission);
    }

    return (
        <SongSubmissionContext.Provider value={{updateSong: setPickedSong, id: pickedSong}}>
            <div className="App">
                {hasSubmitted ? <ThankYouPage/> : <MainPage onSubmit={onSubmit}/>}
            </div>
        </SongSubmissionContext.Provider>
    );
}

export default App;
