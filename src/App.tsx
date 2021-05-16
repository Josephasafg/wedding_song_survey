import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Song} from "./components/songs/song/song";

function App() {
  return (
    <div className="App">
      <Song title={"Asaf"} isChecked={false} onChange={() => {}}/>
      <Song title={"Asaf"} isChecked={false} onChange={() => {}}/>
    </div>
  );
}

export default App;
