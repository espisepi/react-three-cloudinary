import React from 'react';
import * as Scene from "../Scene";


export default function Apps({ id='scene1', style={position: 'absolute', top: '0', width: '100%', height: '100vh'} }) {
    if( id === 'scene1' ) {
        return <Scene.Scene1Canvas style={style} />
    } else if ( id === 'scene1AR' ) {
       return <Scene.Scene1ARCanvas />
    } else if ( id === 'scene2' ) {
        return <Scene.Scene2Canvas style={style} />
    }
}