import React, { useState } from 'react';
import '../styles/globals.css'
import Canvas from '../components/Canvas'
import ModeContext from '../components/ModeContext';

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState('managing');
  return <ModeContext.Provider value={{ mode: mode, setMode: setMode }}>
    <Canvas />
  </ModeContext.Provider>
}

export default MyApp
