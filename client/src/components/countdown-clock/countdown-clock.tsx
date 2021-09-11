import React, {useState} from "react";
import Countdown, {zeroPad} from "react-countdown";
import "./countdown-clock.css";

const CHOSEN_SONG_DATE = new Date(2021, 10, 8, 19, 30);

interface InnerCountdownProps {
    hours: number
    minutes: number
    seconds: number
    completed: boolean
    total: number
    formatted: { days: string, hours: string, minutes: string, seconds: string }
}

export const VoteCountdown: React.FC = () => {
    const Completionist = () => <span>ההצבעה הסתיימה!</span>;

    const [currentSeconds, setSeconds] = useState(-1);
    const [currentMinutes, setminutes] = useState(-1);
    const [currentHours, setHours] = useState(-1);

// Renderer callback with condition
    const renderer = (countdownProps: InnerCountdownProps) => {
        const {hours, minutes, seconds, completed} = countdownProps;

        setSeconds(seconds)
        setminutes(minutes)
        setHours(hours)

        const secondStyle = seconds === currentSeconds ? "" : "move";
        const minutesStyle = minutes === currentMinutes ? "" : "move";
        const hourStyle = hours === currentHours ? "" : "move";

        if (completed) {
            // Render a completed state
            return <Completionist/>;
        } else {
            // Render a countdown
            return <div className={"clock"}>
                {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
                {/*<div className={hourStyle}>*/}
                {/*    {zeroPad(hours)}:*/}
                {/*</div>*/}
                {/*<div className={minutesStyle}>*/}
                {/*    {zeroPad(minutes)}:*/}
                {/*</div>*/}
                {/*<div className={"move"}>*/}
                {/*    {zeroPad(seconds)}*/}
                {/*</div>*/}
            </div>;
        }
    };


    return (
        <div >
            <Countdown date={CHOSEN_SONG_DATE}
                       renderer={renderer}/>

        </div>
    )
}