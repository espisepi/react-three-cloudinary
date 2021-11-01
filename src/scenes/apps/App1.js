import React, { useEffect, useState, useRef, useCallback } from 'react';
import './App1.css';

import {CloudinaryContext, Image, Video, Transformation } from 'cloudinary-react';

// import { Scene1Canvas } from '../Scene1';
// import { Scene2Canvas } from '../Scene2';

import { Scene1Canvas, Scene1ARCanvas, Scene2Canvas } from '../Scene';

import { dataMusic } from '../../data/data';

import { FullScreen, useFullScreenHandle } from "react-full-screen";


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


function App1() {

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
    // setShowVideo((v)=>(true));

    if(newLink.includes(filterYoutubeLink)){
      newLink = herokuapp + newLink; // Tengo que tener levantada esa maquina en DigitalOcean
    }
    setLink((v)=>(newLink));

  },[]);

  const inputTextLinkRef = useRef();
  const handleSearchLink = useCallback(()=>{
    if(inputTextLinkRef.current) {
      let newLink = inputTextLinkRef.current.value;
      if(newLink.includes(filterYoutubeLink)){
        newLink = herokuapp + newLink; // Tengo que tener levantada esa maquina en DigitalOcean
      }
      setLink((v)=>(newLink));
      
      inputTextLinkRef.current.value = '';
    }
  },[inputTextLinkRef]);

  // useEffect(()=>{
  //   console.log('link: ' + link)
  // },[link])

  const handleFullScreen = useFullScreenHandle();
  const toggleFullScreen = useCallback(()=>{
    if(handleFullScreen.active) {
      handleFullScreen.exit();
    } else {
      handleFullScreen.enter();
    }
  },[handleFullScreen]);

  return (
    <FullScreen handle={handleFullScreen}>
    <div className="App" style={{ overflow: 'hidden' }}>

      <Scene1Canvas style={{position: 'absolute', top: '0', width: '100%', height: '100vh'}} />

      <video id="video" style={{ display: showVideo ? 'block' : 'none', width: '100%', zIndex: 100  }}
       src={link} controls={true} crossOrigin="anonymous"></video>

      <div className="ui-buttons" style={{ opacity:'0.5', position: 'absolute', bottom: 0, zIndex: 50, width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'flex-end'  }}>

        <button style={{ width:'90px', height:'64px', borderRadius: '15px' }}
                onClick={toggleFullScreen}> Full Screen </button>

        <button style={{ width:'90px', height:'64px', borderRadius: '15px' }}
                onClick={handleShowVideo}> Show Video </button>

        <button style={{ width:'90px', height:'64px', borderRadius: '15px' }}
                onClick={handleShowPanelMusic}>Change Video</button>

      </div>

      <div className="panel-music" style={{ overflow: 'auto', display: showPanelMusic ? 'block' : 'none', position: 'absolute', top: 0, zIndex: 25, width: '100%', height: '100vh', backgroundColor: 'gray', opacity: 0.5 }}  >
        
        <div className="panel-music__search" style={{ width: '100%', height: '5vh', cursor: 'pointer', display: 'flex',  }}>
          
          <input type="text" style={{ decoration: 'none' }}
                 ref={inputTextLinkRef}
                 placeholder='https://www.youtube.com/watch?v=Jj9bsdkzuJs' ></input>

          <button style={{ borderRadius: '15px' }}
                  onClick={ handleSearchLink } >Search</button>

          <button style={{ borderRadius: '15px' }}
                  onClick={ handleShowPanelMusic } >Exit</button>

        </div>

        { dataMusic.map( v => (
          <div key={v.name} className="panel-music__link" style={{ width: '100%', height: '5vh', cursor: 'pointer' }} 
               onClick={ () => handleLink(v.link) }>
            <h3>{v.name}</h3>
          </div>
        ) ) }
      </div>

    </div>
    </FullScreen>
  );
}

export default App1;







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