import React, { Suspense } from 'react';

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box } from '@react-three/drei';

// import { BoxVideo, BoxShader } from './components/BoxCustom';
// import VideoPoints from './components/VideoPoints';

import Horse from '../scenes/components/Horse';



export function Scene2() {
    return (
        <>
        <ambientLight />
        <Horse />
        <OrbitControls />
        </>
    )
}

export function Scene2Canvas({ style }) {
    return (
        <Canvas style={style} >
            <Suspense fallback={<Box material-color='red' material-wireframe='true'/>}>
                <Scene2/>
            </Suspense>
        </Canvas>
    )
}