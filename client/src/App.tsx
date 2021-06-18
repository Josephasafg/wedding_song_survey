import React, {createContext, useState} from 'react';
import './App.css';
import {SongsAPI} from "./API/api";
import {ThankYouPage} from "./components/thank-you-page/thank-you-page";
import {MainPage} from "./components/main-page/main-page";
import {useHistory} from "react-router-dom";


export const SongSubmissionContext = createContext({
    id: -1, updateSong: (_: number) => {
    }
});

function App() {
    const [pickedSong, setPickedSong] = useState(-1);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    let history = useHistory();

    const onSubmit = async () => {
        const hasSuccessfulSubmission = await SongsAPI.submitChoice(pickedSong);
        setHasSubmitted(hasSuccessfulSubmission);
    }

    function redirectToPage(url: string, component: JSX.Element) {
        history.push(url);
        return component;
    }

    return (
        <SongSubmissionContext.Provider value={{updateSong: setPickedSong, id: pickedSong}}>
            <div className="App">
                {hasSubmitted ? redirectToPage("/thank-you", <ThankYouPage/>) : <MainPage onSubmit={onSubmit}/>}
            </div>
        </SongSubmissionContext.Provider>
    );
}

export default App;
