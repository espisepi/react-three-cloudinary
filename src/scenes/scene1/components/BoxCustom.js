import { useMemo, useRef, useState } from "react";
import * as THREE from 'three';
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { Box } from '@react-three/drei';

import useAnalyser from "../../../hooks/useAnalyser";
import "./shaders/Fade";

import img1 from "./shaders/img/img1.jpg";
import img2 from "./shaders/img/img2.jpg";
import img3 from "./shaders/img/disp3.jpg";
import VideoPointShader from "./shaders/VideoPointShader";
import { useEffect } from "react/cjs/react.development";



export function BoxVideo({ id='video' }) {

    const video = useMemo(()=>(document.getElementById( id )),[id]);

    const analyser = useAnalyser(id);
    useFrame(()=>{
        if(analyser){
            // analyser.update();
            console.log(analyser.getUpdateLowerMax());
        }
    })

    console.log('holi');

    const textureVideo = useMemo(()=>(new THREE.VideoTexture( video ) ),[video]);

    return (
        <Box material-map={textureVideo} scale={[2,2,2]}/>
    )
}

// poner shadertoy
export function BoxShader({}) {
    const [texture1, texture2, dispTexture] = useLoader(THREE.TextureLoader, [
        img1,
        img2,
        img3
      ]);
    const [hovered, setHover] = useState(false);

    const analyser = useAnalyser('video', 2048);
    const refMesh = useRef();
    useFrame( () => {
        if ( analyser && refMesh.current ) {
            refMesh.current.material.uniforms.dispFactor.value = analyser.getUpdateLowerMax();
        }
    })

    return (
        <mesh
            ref={refMesh}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <planeBufferGeometry attach="geometry" args={[5, 5]} />
            {/* <meshBasicMaterial map={dispTexture} /> */}
            <fade
                attach="material"
                side={THREE.DoubleSide}
                texture={texture1}
                texture2={texture2}
                disp={dispTexture}
                dispFactor={0.5}
            />
      </mesh>
    )
}

export function VideoPoint({ id_video = 'video' }) {
        
    const { scene } = useThree();

    // Hacer un setInterval que finaliza hasta que encuentra el video y cuando lo encuentra se ejecuta el useEffect siguiente (crear useState para el video)
    const [video, setVideo] = useState();
    useEffect(()=>{
        const id_interval = setInterval(()=>{
            const videoEl = document.getElementById(id_video);
            if(videoEl && videoEl.videoWidth !== 0 && videoEl.videoHeight !== 0 ){
                setVideo((v)=> (videoEl));
                clearInterval(id_interval);
            }
        },100);
    },[id_video]);

    // Crear particles con el video
    const [points, setPoints] = useState();
    useEffect(()=>{

        if(video) {

            // Define Geometry
            const geometry = new THREE.BufferGeometry();
            const positions = [];
            const uvs = [];
    
            const videoWidth = video.videoWidth;
            const videoHeight = video.videoHeight;
    
            for (let y = 0, height = videoHeight; y < height; y += 1) {
                for (let x = 0, width = videoWidth; x < width; x += 1) {
                    const vertex = new THREE.Vector3(
                        x - videoWidth / 2,
                        -y + videoHeight / 2,
                        0
                    );
                    positions.push( vertex.x, vertex.y, vertex.z );
                    uvs.push( x / videoWidth, y / videoHeight );
                }
            }
            console.log('video height: ' + videoHeight);
            console.log('video width: ' + videoWidth);
    
            geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );
            geometry.setAttribute( 'uv', new THREE.Float32BufferAttribute( uvs, 2 ) );
            
            // Define Material
            const material = new VideoPointShader();
            material.uniforms.iChannel0.value = new THREE.VideoTexture(video);

            // Define Points
            const particles = new THREE.Points(geometry, material);
            particles.rotation.x += Math.PI;
            // Temporal
            particles.position.z += -100.0;
        
            scene.add(particles);
            setPoints((v)=>(particles));
    
            return () => {
                scene.remove(particles);
                setPoints((v)=>(null));
            }

        }

    },[video]);

    const analyser = useAnalyser('video');
    useFrame(()=>{
        if ( analyser && points ) {
           points.material.uniforms.bass.value = analyser.getUpdateLowerMax();
        }
    })

    return (
        null
        // Lo mas logico es hacerlo en un useEffect para controlar cuando se renderiza por parámetro
        // <points>
        //     <bufferGeometry attach="geometry">
        //     <bufferAttribute
        //         attachObject={['attributes', 'position']}
        //         array={new THREE.Float32BufferAttribute( positions, 3 )}
        //         // count={positions.length / 3}
        //         // itemSize={3}
        //     />
        //     </bufferGeometry>
        // </points>
    )
}