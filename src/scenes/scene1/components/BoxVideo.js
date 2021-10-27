import { useMemo } from "react";
import * as THREE from 'three';

import { Box } from '@react-three/drei';


export default function BoxVideo({ id='video' }) {

    const textureVideo = useMemo(()=>{
        const video = document.getElementById( id );
        const texture = new THREE.VideoTexture( video );
        return texture;
    },[id]);

    return (
        <Box material-map={textureVideo} />
    )
}