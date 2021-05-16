import React, {useEffect, useState} from "react";
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import {DiscogsRequests} from "../../../API/discogs-requests";
import {SongInfo} from "./song";


interface SongProps {
    title: string
    isChecked: boolean
    onChange: (event: any) => void
    songsInfo: SongInfo
}

export const SongComponent: React.FC<SongProps> = (
    {
        title,
        isChecked,
        onChange,
        songsInfo
    }) => {
    const [thumbnail, setThumbnail] = useState("");
    const name = `radio-button-${title}`;

    const getImage = async () => {
        const songResults = await DiscogsRequests.searchSong(songsInfo)
        setThumbnail(songResults.thumb);
    }

    useEffect(() => {
        getImage();
    }, [])

    return (
        <div>
            <div>
                {title}
            </div>
            <Radio
                checked={isChecked}
                onChange={onChange}
                value={title}
                name={name}
                inputProps={{ 'aria-label': 'A' }}
            />
            <img src={thumbnail}/>
        </div>
    )
}