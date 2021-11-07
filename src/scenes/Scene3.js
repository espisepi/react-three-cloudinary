import React, { Suspense, useRef } from 'react';
import * as THREE from 'three';

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box } from '@react-three/drei';

import useAnalyser from '../hooks/analyser/useAnalyser';
import useVideo from '../hooks/useVideo';

import { BoxAudioVisualizerShader1 } from './components/BoxCustom';

import { DefaultXRControllers, ARCanvas, VRCanvas, Interactive } from '@react-three/xr';



export function Scene3() {
    return (
        <>
        <Suspense fallback={<Box material-color='red' material-wireframe='true'/>}>
            <ambientLight />
            <BoxAudioVisualizerShader1 />
        </Suspense>
        </>
    );
}

export function Scene3Canvas({ style, ...props }) {
    return (
        <Canvas style={{...style, zIndex:'-5' }} {...props} camera={{/*position:[52.74, 52.74, 175.80], fov:55, far:20000*/}} >
            <Scene3/>
            <OrbitControls rotateSpeed={0.5} enablePan={false} autoRotateSpeed={1} maxPolarAngle={Math.PI / 2 - 0.005} maxDistance={2500} />
        </Canvas>
    );
}

export function Scene3ARCanvas() {
    return (
        <ARCanvas>
            <Scene3 />
            <DefaultXRControllers />
        </ARCanvas>
    );
}

export function Scene3VRCanvas() {
    return (
        <VRCanvas>
            <Scene3 />
            <DefaultXRControllers />
        </VRCanvas>
    );
}