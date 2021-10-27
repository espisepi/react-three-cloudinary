import React from 'react';

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box } from '@react-three/drei';

import BoxVideo from './components/BoxVideo';


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
        <BoxVideo />
        <OrbitControls />
        </>
    )
}

export function Scene1Canvas({ canvasStyle=canvasStyleDefault }) {
    return (
        <Canvas style={canvasStyle} >
            <Scene1/>
        </Canvas>
    )
}