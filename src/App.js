import React, { useEffect, useState } from 'react';
import './App.css';

import {CloudinaryContext, Image, Video, Transformation } from 'cloudinary-react';

import { Scene1Canvas } from './scenes/scene1/Scene1';
import { useCallback } from 'react/cjs/react.development';

const dataMusic = [
  {
    url: 'video.mp4',
  },
  {
    url: 'https://video-dl-esp.herokuapp.com/video/video?url=https://www.youtube.com/watch?v=96h97kNEgXM',
  },
  {
    url: 'https://video-dl-esp.herokuapp.com/video/video?url=https://www.youtube.com/watch?v=BgcFGo7X3_M&list=PLbF25hg0V3wBCMH8pvbGOUw5fxp0pbrLA&index=71',
  },
];


function App() {

  const [index, setIndex] = useState(0);
  const incrementIndex = useCallback(()=>{
    const newIndex = (index + 1) % 3;
    setIndex((v)=>(newIndex));
  },[index]);

  const [ showVideo, setShowVideo ] = useState(true);
  const handleShowVideo = useCallback(()=>{
    const newShowVideo = !showVideo;
    setShowVideo((v)=>(newShowVideo));
  },[showVideo])

  return (
    <div className="App" style={{ overflow: 'hidden' }}>

      <Scene1Canvas style={{position: 'absolute', top: '0', width: '100%', height: '100vh'}} />

      <video id="video" style={{ display: showVideo ? 'block' : 'none'  }}
       src={dataMusic[index].url} controls={true} crossOrigin="anonymous"></video>

      <div className="ui-buttons" style={{ position: 'absolute', top: 0, zIndex: 5 , height:'100vh', width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'flex-end'  }}>

      <button style={{ width:'90px', height:'64px', borderRadius: '15px' }}
                onClick={handleShowVideo}> Video </button>
        
        <button style={{ width:'90px', height:'64px', borderRadius: '15px' }}
                onClick={handleShowVideo}> Mostrar Video </button>

        <button style={{ width:'90px', height:'64px', borderRadius: '15px' }}
                onClick={incrementIndex}>Cambiar cancion</button>

      </div>

    </div>
  );
}

export default App;







      {/* <CloudinaryContext cloudName="sepinaco">
        <div>
          <Image publicId="sample" width="50" />
        </div>
        <Image id="image" publicId="sample" width="0.5" />

        <Video id="video" publicId="samples/sea-turtle" controls={true} width={320} height={240} crossOrigin="anonymous" >
        </Video>

        <video id="video" src="video.mp4" controls={true}></video>

        <video id="video" src="https://video-dl-esp.herokuapp.com/video/video?url=https://www.youtube.com/watch?v=96h97kNEgXM" controls={true} crossOrigin="anonymous"></video>

        <Video id="video" cloudName="demo" publicId="dog" controls="true" >
          <Transformation width="0.4" angle="20" />
          <Transformation overlay="cloudinary_icon_white" width="60" opacity="50" gravity="south_east" y="15" x="60" />
        </Video>

      </CloudinaryContext> */}