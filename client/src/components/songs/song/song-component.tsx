import React from "react";
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
        song
    }) => {

    return (
        <div className="song-wrapper">
            <Iframe
                url={song.embeddedURL}
                width="400"
                height="100"
                frameBorder={0}
                allow="encrypted-media"/>
        </div>
    )
}