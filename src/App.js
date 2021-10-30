import React, { useEffect, useState } from 'react';
import './App.css';

import {CloudinaryContext, Image, Video, Transformation } from 'cloudinary-react';

import { Scene1Canvas } from './scenes/scene1/Scene1';
import { useCallback } from 'react/cjs/react.development';

import { dataMusic } from './data/data';

// const dataMusic = [
//   {
//     link: 'video.mp4',
//   },
//   {
//     link: 'https://video-dl-esp.herokuapp.com/video/video?url=https://www.youtube.com/watch?v=96h97kNEgXM',
//   },
//   {
//     link: 'https://video-dl-esp.herokuapp.com/video/video?url=https://www.youtube.com/watch?v=BgcFGo7X3_M&list=PLbF25hg0V3wBCMH8pvbGOUw5fxp0pbrLA&index=71',
//   },
// ];

const filterYoutubeLink = 'youtu';
const herokuapp = 'https://video-dl-esp.herokuapp.com/video/video?url=';


function App() {

  const [ showVideo, setShowVideo ] = useState(true);
  const handleShowVideo = useCallback(()=>{
    setShowVideo((v)=>(!showVideo));
  },[showVideo])

  const [ showPanelMusic, setShowPanelMusic ] = useState(false);
  const handleShowPanelMusic = useCallback(()=>{
    setShowPanelMusic((v)=>(!showPanelMusic));
  },[showPanelMusic])

  // link: String (url from video)
  const [ link, setLink ] = useState( herokuapp + dataMusic[5].link );
  const handleLink = useCallback((newLink)=>{

    //Show video when link change
    setShowVideo((v)=>(true));

    if(newLink.includes(filterYoutubeLink)){
      newLink = herokuapp + newLink; // Tengo que tener levantada esa maquina en DigitalOcean
    }
    setLink((v)=>(newLink));

  },[]);

  return (
    <div className="App" style={{ overflow: 'hidden' }}>

      <Scene1Canvas style={{position: 'absolute', top: '0', width: '100%', height: '100vh'}} />

      <video id="video" style={{ display: showVideo ? 'block' : 'none', width: '100%', zIndex: 100  }}
       src={link} controls={true} crossOrigin="anonymous"></video>

      <div className="ui-buttons" style={{ opacity:'0.5', position: 'absolute', bottom: 0, zIndex: 50, width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'flex-end'  }}>

        <button style={{ display:'none', width:'90px', height:'64px', borderRadius: '15px' }}
                onClick={handleShowVideo}> Buscar video </button>
        
        <button style={{ width:'90px', height:'64px', borderRadius: '15px' }}
                onClick={handleShowVideo}> Mostrar Video </button>

        <button style={{ width:'90px', height:'64px', borderRadius: '15px' }}
                onClick={handleShowPanelMusic}>Cambiar cancion</button>

      </div>

      <div className="panel-music" style={{ overflow: 'auto', display: showPanelMusic ? 'block' : 'none', position: 'absolute', top: 0, zIndex: 25, width: '100%', height: '100vh', backgroundColor: 'gray', opacity: 0.5 }}  >
        
        <div className="panel-music__search" style={{ width: '100%', height: '5vh', cursor: 'pointer' }}>
          <input type="text"></input>

        </div>

        { dataMusic.map( v => (
          <div key={v.name} className="panel-music__link" style={{ width: '100%', height: '5vh', cursor: 'pointer' }} 
               onClick={ () => handleLink(v.link) }>
            <h3>{v.name}</h3>
          </div>
        ) ) }
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