import React, { useEffect, useState, useRef, useCallback } from 'react';
import './App.css';

import App1 from './apps/App1';



export default function App() {

  const [clicked, setClicked] = useState(false);

  console.log(clicked)

  if(clicked) {
    return (
      <App1 />
    );
  }

  return (
        <div style={{display: 'flex', alignItems: 'center', width: '100%', height: '100vh', color: 'white'}}
             onClick={ () => setClicked(true) } >
          <h1>Click to Start</h1>
        </div>
  );

}