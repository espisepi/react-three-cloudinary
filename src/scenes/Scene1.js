import React from 'react';

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box } from '@react-three/drei';

// import { BoxVideo, BoxShader } from './components/BoxCustom';
import VideoPoints from './components/VideoPoints';
import { Suspense } from 'react';

import { DefaultXRControllers, ARCanvas, Interactive, VRCanvas } from '@react-three/xr';

import GodCameraControls from './controls/GodCameraControls';

export function Scene1() {
    return (
        <>
        <ambientLight />
        {/* <BoxVideo /> */}
        {/* <BoxShader /> */}
        <VideoPoints />
        </>
    )
}

export function Scene1Canvas({ style }) {
    return (
        <Canvas style={style} >
            <Suspense fallback={<Box material-color='red' material-wireframe='true'/>}>
                <Scene1/>
            </Suspense>

            <GodCameraControls /> 
        </Canvas>
    )
}

export function Scene1ARCanvas() {
    return (
        <ARCanvas>
            <Scene1 />
            <DefaultXRControllers />
        </ARCanvas>
    );
}

export function Scene1VRCanvas() {
    return (
        <VRCanvas>
            <Scene1 />
            <DefaultXRControllers />
        </VRCanvas>
    );
}