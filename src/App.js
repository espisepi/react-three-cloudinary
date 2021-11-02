import React, { useEffect, useState, useRef, useCallback } from 'react';
import './App.css';

import AppUI from './scenes/apps/AppUI';



export default function App() {

  const [clicked, setClicked] = useState(false);

  console.log(clicked)

  if(clicked) {
    return (
      <AppUI />
    );
  }

  return (
        <div style={{display: 'flex', alignItems: 'center', width: '100%', height: '100vh', color: 'white'}}
             onClick={ () => setClicked(true) } >
          <h1>Click to Start</h1>
        </div>
  );

}