import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const SOUND_URLS = {
  'Q': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3',
  'W': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3',
  'E': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3',
  'A': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3',
  'S': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3',
  'D': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3',
  'Z': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3',
  'X': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3',
  'C': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3',
}

const SOUND_NAMES = {
  'Q': 'Heater-1',
  'W': 'Heater-2',
  'E': 'Heater-3',
  'A': 'Heater-4',
  'S': 'Heater-6',
  'D': 'Dsc_Oh',
  'Z': 'Kick_n_Hat',
  'X': 'RP4_KICK_1',
  'C': 'Cev_H2'
}

function Drum() {
  const [display, setDisplay] = useState('');

  const playSound = (key) => {
    const audio = document.getElementById(key);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    setDisplay(SOUND_NAMES[key] || '');
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toUpperCase();
      if (SOUND_URLS[key]) playSound(key);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const keys = ['Q','W','E','A','S','D','Z','X','C'];

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      <div className="pad-bank">
        {keys.map(k => (
          <button
            key={k}
            id={`${k}_button`}
            className="drum-pad"
            onClick={() => playSound(k)}
          >
            {k}
            <audio id={k} className="clip" src={SOUND_URLS[k]}></audio>
          </button>
        ))}
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Drum/>
      </header>
    </div>
  );
}

export default App;
