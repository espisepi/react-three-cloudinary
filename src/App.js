import React, { useEffect, useState } from 'react';
import './App.css';

import {CloudinaryContext, Image, Video, Transformation } from 'cloudinary-react';

import { Scene1Canvas } from './scenes/scene1/Scene1';


function App() {

  return (
    <div className="App">
      <h1>HOLI</h1>

      <CloudinaryContext cloudName="sepinaco">
        <div>
          <Image publicId="sample" width="50" />
        </div>
        <Image id="image" publicId="sample" width="0.5" />

        {/* <Video id="video" publicId="samples/sea-turtle" controls={true} width={320} height={240} crossOrigin="anonymous" >
        </Video> */}

        {/* <video id="video" src="video.mp4" controls={true}></video> */}

        <video id="video" src="https://video-dl-esp.herokuapp.com/video/video?url=https://www.youtube.com/watch?v=96h97kNEgXM" controls={true} crossOrigin="anonymous"></video>

        {/* <Video id="video" cloudName="demo" publicId="dog" controls="true" >
          <Transformation width="0.4" angle="20" />
          <Transformation overlay="cloudinary_icon_white" width="60" opacity="50" gravity="south_east" y="15" x="60" />
        </Video> */}

      </CloudinaryContext>


      <h1>Sepinaco</h1>
      <Scene1Canvas />

    </div>
  );
}

export default App;
