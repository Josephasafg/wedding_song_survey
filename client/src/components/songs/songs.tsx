import React, {useContext} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import {Song} from "../../models/song";
import {SongComponent} from "./song/song-component";
import {SongSubmissionContext} from "../../App";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 550,
            left: "35%",
            backgroundColor: theme.palette.background.paper,
        },

        itemText: {
            margin: 20
        }
    }),
);

interface SongsProps {
    songs: Song[]
}

export const SongList: React.FC<SongsProps> = (
    {
        songs
    }) => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(1);
    const songContext = useContext(SongSubmissionContext);

    const onSongChange = (song: Song): void => {
        songContext.updateSong(song.id);
        setChecked(song.id);
    }

    return (
        <List dense className={classes.root}>
            {songs.map((song, index) => {
                const labelId = `checkbox-list-secondary-label-${index}`;

                const isChecked = checked === song.id;

                const backgroundColor = isChecked ? "rgba(0, 0, 0, 0.04)" : "transparent";

                return (
                    <ListItem key={labelId} button style={{backgroundColor: backgroundColor}}>
                        <SongComponent
                            key={labelId}
                            song={song}
                            isChecked={song.id.toString() === songContext.id.toString()}
                            onChange={onSongChange}/>
                        <ListItemText id={labelId} primary={song.name} className={classes.itemText}/>
                        <ListItemSecondaryAction>
                            <Checkbox
                                edge="end"
                                onChange={() => onSongChange(song)}
                                checked={isChecked}
                                inputProps={{'aria-labelledby': labelId}}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    );
}

export default SongList;