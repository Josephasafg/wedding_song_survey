import React from 'react';
import './App.css';
import {Songs} from "./components/songs/songs";
import {SubmitButton} from "./components/submit-button/submit-button";

const HELP_US_TEXT = "בבקשה תעזרו לנו לבחור שיר לשבירת הכוס!";

function App() {

    return (
        <div className="App">
            <div className="help-us-header">
                <header>{HELP_US_TEXT}</header>
            </div>
            <Songs/>
            <SubmitButton/>
        </div>
    );
}

export default App;
