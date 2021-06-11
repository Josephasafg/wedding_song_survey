import React from "react";
import Radio from '@material-ui/core/Radio';
import "./song.css";
import Iframe from "react-iframe";
import {Song} from "../../../models/song";


interface SongProps {
    song: Song
    isChecked: boolean
    onChange: (event: any) => void
}

export const SongComponent: React.FC<SongProps> = (
    {
        isChecked,
        onChange,
        song
    }) => {

    return (
        <div className="song-wrapper">
            <div>
                {song.name}
            </div>
            <Iframe
                url={song.embeddedURL}
                width="100%"
                height="380"
                frameBorder={0}
                allow="encrypted-media"/>

            <Radio
                checked={isChecked}
                onChange={onChange}
                value={song.id}
                inputProps={{'aria-label': 'A'}}
            />
        </div>
    )
}