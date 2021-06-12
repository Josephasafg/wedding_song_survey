import CircularProgress from '@material-ui/core/CircularProgress';
import {createStyles, makeStyles, Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            '& > * + *': {
                marginLeft: theme.spacing(2),
            },
        },
    }),
);

export const CircularSpinner = () => {
    const style = useStyles();

    return (
        <div>
            <CircularProgress/>
        </div>
    )
}