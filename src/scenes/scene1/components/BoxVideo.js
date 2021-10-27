import { useMemo } from "react";
import * as THREE from 'three';
import { useFrame } from "@react-three/fiber";
import { Box } from '@react-three/drei';

import useAnalyser from "../../../hooks/useAnalyser";



export default function BoxVideo({ id='video' }) {

    const video = useMemo(()=>(document.getElementById( id )),[id]);

    const analyser = useAnalyser(video);
    useFrame(()=>{
        if(analyser){
            // analyser.update();
            console.log(analyser.getUpdateLowerMax());
        }
    })

    console.log('holi');

    const textureVideo = useMemo(()=>(new THREE.VideoTexture( video ) ),[video]);

    return (
        <Box material-map={textureVideo} />
    )
}