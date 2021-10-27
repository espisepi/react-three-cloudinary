import { useMemo } from "react";
import * as THREE from 'three';
import { useFrame } from "@react-three/fiber";
import { Box } from '@react-three/drei';

import useAnalyser from "../../../hooks/useAnalyser";



export default function BoxVideo({ id='video' }) {

    const video = useMemo(()=>(document.getElementById( id )),[id]);

    const [analyser, dataAnalyser, updateAnalyser] = useAnalyser(video);

    useFrame(()=>{
        updateAnalyser();
        // console.log(dataAnalyser);
    })

    console.log('holi');

    const textureVideo = useMemo(()=>(new THREE.VideoTexture( video ) ),[video]);

    return (
        <Box material-map={textureVideo} />
    )
}