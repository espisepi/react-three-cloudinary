import React, { Suspense, useRef } from 'react';
import * as THREE from 'three';

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box } from '@react-three/drei';

import useAnalyser from '../hooks/analyser/useAnalyser';
import useVideo from '../hooks/useVideo';

import AudioVisualizerShader1 from './components/shaders/audioVisualizer-1/AudioVisualizerShader1';

export function Scene3() {

    const analyser = useAnalyser();
    const video = useVideo();

    const refBox = useRef();

    useFrame(()=>{
        if(analyser && refBox.current.material.uniforms.iChannel0) {
            analyser.update();
            refBox.current.material.uniforms.iChannel0.value.needsUpdate = true;
        }
    })

    return (
        <>
        <ambientLight />
        <Box ref={refBox} >
            <audioVisualizerShader1 attach='material' uniforms-iChannel0-value={ analyser ? analyser.getDataTexture() : undefined} />
        </Box>
        </>
    );
}

export function Scene3Canvas({ style, ...props }) {
    return (
        <Canvas style={{...style, zIndex:'-5' }} {...props} camera={{/*position:[52.74, 52.74, 175.80], fov:55, far:20000*/}} >
            <Suspense fallback={<Box material-color='red' material-wireframe='true'/>}>
                <Scene3/>
            </Suspense>
            <OrbitControls rotateSpeed={0.5} enablePan={false} autoRotateSpeed={1} maxPolarAngle={Math.PI / 2 - 0.005} maxDistance={2500} />
        </Canvas>
    );
}

