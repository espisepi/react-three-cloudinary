import React, { Suspense } from 'react';
import * as THREE from 'three';

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box } from '@react-three/drei';

// import { BoxVideo, BoxShader } from './components/BoxCustom';
// import VideoPoints from './components/VideoPoints';

import Horse from '../scenes/components/Horse';
import Ocean from './components/Ocean';
import BackgroundVideo from './components/BackgroundVideo';

export function Scene2() {
    return (
        <>
        <ambientLight />
        <Horse />
        <group rotation={[0,-Math.PI/2,0]}>
            <Ocean geometry={new THREE.BoxBufferGeometry( 10000, 10000, 10000 )} position={[0,5000,0]} rotation={[0,Math.PI/2,0]} />
        </group>
        {/* <BackgroundVideo /> */}
        <OrbitControls />
        </>
    )
}

export function Scene2Canvas({ style }) {
    return (
        <Canvas style={style} camera={{far:20000}} >
            <Suspense fallback={<Box material-color='red' material-wireframe='true'/>}>
                <Scene2/>
            </Suspense>
        </Canvas>
    )
}