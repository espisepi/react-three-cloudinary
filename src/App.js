import React, { useEffect, useState } from 'react';
import './App.css';

import {CloudinaryContext, Image, Video, Transformation } from 'cloudinary-react';

import useAnalyser from './hooks/useAnalyser';

import { Scene1Canvas } from './scenes/scene1/Scene1';

function ImageAndVideo() {

  const [image, setImage] = useState();
  const [video, setVideo] = useState();
  
  useEffect(()=>{
    const image = document.getElementById('image');
    const video = document.getElementById('video');
    console.log(image)
    console.log(video)

    setVideo(()=>video)
    setImage(()=>image)

  },[]);

  // const [analyser, dataAnalyser, updateAnalyser] = useAnalyser(video);
  // console.log(analyser)
  // console.log(dataAnalyser)

  // window.analyser = analyser;
  // window.dataAnalyser = dataAnalyser;
  
  // setInterval(()=>{
  //   if(analyser){
  //     updateAnalyser();
  //     // analyser.getByteFrequencyData(dataAnalyser)
  //     console.log(dataAnalyser)
  //   }
  // },600);

  return null;
}

function App() {

  return (
    <div className="App">
      <h1>HOLI</h1>

      <CloudinaryContext cloudName="sepinaco">
        <div>
          <Image publicId="sample" width="50" />
        </div>
        <Image id="image" publicId="sample" width="0.5" />

        {/* <Video id="video" publicId="samples/sea-turtle" controls={true} style={{width:'50%'}} >
        </Video> */}

        <video id="video" src="video.mp4" controls={true}></video>

        {/* <Video cloudName="demo" publicId="dog" controls="true" >
          <Transformation width="0.4" angle="20" />
          <Transformation overlay="cloudinary_icon_white" width="60" opacity="50" gravity="south_east" y="15" x="60" />
        </Video> */}

      </CloudinaryContext>

         
      <ImageAndVideo />

      <h1>Sepinaco</h1>
      <Scene1Canvas />

    </div>
  );
}

export default App;
