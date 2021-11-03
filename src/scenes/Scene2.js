import React, { Suspense } from 'react';
import * as THREE from 'three';

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box } from '@react-three/drei';

// import { BoxVideo, BoxShader } from './components/BoxCustom';
// import VideoPoints from './components/VideoPoints';

import Horse from '../scenes/components/Horse';
import Ocean from './components/Ocean';
import BackgroundVideo from './components/BackgroundVideo';

import { DefaultXRControllers, ARCanvas, Interactive } from '@react-three/xr';

export function Scene2() {
    return (
        <>
        <ambientLight />
        <Horse />
        <group rotation={[0,-Math.PI/2,0]}>
            <Ocean geometry={new THREE.BoxBufferGeometry( 10000, 10000, 10000 )} position={[0,5000,0]} rotation={[0,Math.PI/2,0]} />
        </group>
        <BackgroundVideo />
        </>
    )
}

export function Scene2Canvas({ style, ...props }) {
    return (
        <Canvas style={{...style, zIndex:'-5' }} {...props} camera={{position:[52.74, 52.74, 175.80], fov:55, far:20000}} >
            <Suspense fallback={<Box material-color='red' material-wireframe='true'/>}>
                <Scene2/>
            </Suspense>
            <OrbitControls rotateSpeed={0.5} enablePan={false} autoRotateSpeed={1} maxPolarAngle={Math.PI / 2 - 0.005} maxDistance={2500} />
        </Canvas>
    )
}

export function Scene2ARCanvas() {
    return (
        <ARCanvas>
            <ambientLight />
            <Horse />
            <group rotation={[0,-Math.PI/2,0]}>
                <Ocean geometry={new THREE.BoxBufferGeometry( 10000, 10000, 10000 )} position={[-52.74,5000 - 52.74,-175.80]} rotation={[0,Math.PI/2,0]} />
            </group>
            <BackgroundVideo />
            <DefaultXRControllers />
        </ARCanvas>
    );
}