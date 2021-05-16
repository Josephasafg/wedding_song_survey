import React from 'react';
import './App.css';
import {Songs} from "./components/songs/songs";

const SONG_TITLES = [
    "Shut up and Dance - Walk the Moon",
    "I'll be there for you - The Rembrandts",
    "Don't Stop Me Now - Queen"
];


function App() {


    return (
        <div className="App">
            <Songs/>
        </div>
    );
}

export default App;
