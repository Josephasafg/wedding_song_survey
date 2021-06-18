import React, {useEffect, useState} from "react";
import {Songs} from "../songs/songs";
import {CircularSpinner} from "../spinner/spinner";
import {SubmitButton} from "../submit-button/submit-button";
import {Song} from "../../models/song";
import {SongsAPI} from "../../API/api";

const HELP_US_TEXT = "בבקשה תעזרו לנו לבחור שיר לשבירת הכוס!";


interface MainPageProps {
    onSubmit: () => void
}

export const MainPage: React.FC<MainPageProps> = (
    {
        onSubmit
    }) => {

    const [isLoad, setIsLoad] = useState(false);
    const [songs, setSongs] = useState<Song[]>([]);


    const handleOnSubmit = () => {
        setIsLoad(true);
        onSubmit();
        setIsLoad(true);
    }

    async function fetchSongs() {
        const songs = await SongsAPI.getSongs();
        setSongs(songs);
    }

    useEffect(() => {
        fetchSongs();
    }, [])


    return (
        <div>
            <div className="help-us-header">
                <header>{HELP_US_TEXT}</header>
            </div>
            <Songs songs={songs}/>
            {isLoad ? <CircularSpinner/> : <SubmitButton onClick={handleOnSubmit}/>}
        </div>
    )
}