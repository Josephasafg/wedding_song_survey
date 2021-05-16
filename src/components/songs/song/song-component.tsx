import React from "react";
import Radio from '@material-ui/core/Radio';
import "./song.css";


interface SongProps {
    title: string
    isChecked: boolean
    onChange: (event: any) => void
    embeddedLink: JSX.Element
}

export const SongComponent: React.FC<SongProps> = (
    {
        title,
        isChecked,
        onChange,
        embeddedLink
    }) => {

    return (
        <div className="song-wrapper">
            <div>
                {title}
            </div>

            {embeddedLink}
            <Radio
                checked={isChecked}
                onChange={onChange}
                value={title}
                inputProps={{'aria-label': 'A'}}
            />
        </div>
    )
}