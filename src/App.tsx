import React from 'react';
import './App.css';
import {Songs} from "./components/songs/songs";

const HELP_US_TEXT = "בבקשה תעזרו לנו לבחור שיר לשבירת הכוס!";

function App() {

    return (
        <div className="App">
            <div className="help-us-header">
                <header>{HELP_US_TEXT}</header>
            </div>
            <Songs/>
        </div>
    );
}

export default App;
