import { useEffect } from 'react';
import './App.css';

import {CloudinaryContext, Image, Video, Transformation } from 'cloudinary-react';

function ImageAndVideo() {
  useEffect(()=>{
    const image = document.getElementById('imagencita');
    const video = document.getElementById('videocito');
    console.log(image)
    console.log(video)
  })
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
        <Image id="imagencita" publicId="sample" width="0.5" />

        <Video id="videocito" publicId="samples/sea-turtle" controls={true} style={{width:'50%'}} >
          <Transformation width="0.4" angle="20" />
        </Video>

        {/* <Video cloudName="demo" publicId="dog" controls="true" >
          <Transformation width="0.4" angle="20" />
          <Transformation overlay="cloudinary_icon_white" width="60" opacity="50" gravity="south_east" y="15" x="60" />
        </Video> */}

      </CloudinaryContext>

      <ImageAndVideo />

    </div>
  );
}

export default App;
