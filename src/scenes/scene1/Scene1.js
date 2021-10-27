import React from 'react';

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box } from '@react-three/drei';

import { BoxVideo, BoxShader } from './components/BoxCustom';
import { Suspense } from 'react';


const canvasStyleDefault = {
    position: 'absolute',
    top: '0',
    width: '100$',
    height: '100vh'
};


export function Scene1() {
    return (
        <>
        <ambientLight />
        {/* <BoxVideo /> */}
        <BoxShader />
        <OrbitControls />
        </>
    )
}

export function Scene1Canvas({ canvasStyle=canvasStyleDefault }) {
    return (
        <Canvas style={canvasStyle} >
            <Suspense fallback={<Box material-color='red' material-wireframe='true'/>}>
                <Scene1/>
            </Suspense>
        </Canvas>
    )
}