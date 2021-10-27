import React, { useState, useEffect, useCallback } from 'react';
import * as THREE from 'three';


// fftSize = 512 || 2048 || potenciaDe2
export default function useAnalyser( audio, fftSize = 2048 ) {

    const [ analyser, setAnalyser ] = useState();
    const [ dataAnalyser, setDataAnalyser ] = useState();
    useEffect(()=>{

        if ( audio ) {
            console.log(audio)
            const context = new AudioContext();
            const src = context.createMediaElementSource(audio);
            console.log(src)
            window.src = src
            const analyser = context.createAnalyser();
            src.connect(analyser);
            analyser.connect(context.destination);
            analyser.fftSize = fftSize;
            const bufferLength = analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);
            
            setAnalyser(()=>(analyser))
            setDataAnalyser(()=>(dataArray))
        }

    },[audio]);

    const updateAnalyser = useCallback( () => { if (analyser && dataAnalyser) analyser.getByteFrequencyData(dataAnalyser); }, [analyser] );

    return [ analyser, dataAnalyser, updateAnalyser] ;
}