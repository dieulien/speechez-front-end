import React from 'react';

import './App.css';
import Waveform from './components/Waveform.jsx';
import oneTwoThree from './audio/one-two-three.mp3';
import WaveSurferPlayback from './components/WavesurferPlayback';

function App() {
  return (
    <div className="App">
      <div>
        {/* <Waveform audio={oneTwoThree}/> */}
        <WaveSurferPlayback />
      </div>
    </div>
  );
}

export default App;
