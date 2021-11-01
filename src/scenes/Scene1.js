import React from 'react';

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box } from '@react-three/drei';

// import { BoxVideo, BoxShader } from './components/BoxCustom';
import VideoPoints from './components/VideoPoints';
import { Suspense } from 'react';




export function Scene1() {
    return (
        <>
        <ambientLight />
        {/* <BoxVideo /> */}
        {/* <BoxShader /> */}
        <VideoPoints />
        <OrbitControls />
        </>
    )
}

export function Scene1Canvas({ style }) {
    return (
        <Canvas style={style} >
            <Suspense fallback={<Box material-color='red' material-wireframe='true'/>}>
                <Scene1/>
            </Suspense>
        </Canvas>
    )
}