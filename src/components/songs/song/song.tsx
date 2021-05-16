import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';


interface SongProps {
    title: string
    isChecked: boolean
    onChange: () => void
}

export const Song: React.FC<SongProps> = (
    {
        title,
        isChecked,
        onChange
    }) => {
    const name = `radio-button-${title}`;

    return (
        <div>
            <Radio
                checked={isChecked}
                onChange={onChange}
                value={title}
                name={name}
                inputProps={{ 'aria-label': 'A' }}
            />
        </div>
    )
}