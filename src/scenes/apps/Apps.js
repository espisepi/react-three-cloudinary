import React from 'react';
import * as Scene from "../Scene";


export default function Apps({ id='scene1', style={position: 'absolute', top: '0', width: '100%', height: '100vh'} }) {
    if( id === 'scene1' ) {
        return <Scene.Scene1Canvas style={style} />
    } 
    else if ( id === 'scene1AR' ) {
       return <Scene.Scene1ARCanvas />
    }
    else if ( id === 'scene1VR' ) {
        return <Scene.Scene1VRCanvas />
     }
    else if ( id === 'scene2' ) {
        return <Scene.Scene2Canvas style={style} />
    }
    else if ( id === 'scene2AR' ) {
        return <Scene.Scene2ARCanvas style={style} />
    }
    else if ( id === 'scene2VR' ) {
        return <Scene.Scene2VRCanvas style={style} />
    }
    else if ( id === 'scene3' ) {
        return <Scene.Scene3Canvas style={style} />
    }
    else if ( id === 'scene3AR' ) {
        return <Scene.Scene3ARCanvas style={style} />
    }
    else if ( id === 'scene3VR' ) {
        return <Scene.Scene3VRCanvas style={style} />
    } 
    else {
        alert(' No se ha definido la Scene elegida, Scene: ' + id);
        return null;
    }
}