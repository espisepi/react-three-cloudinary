import React, { useState, useEffect, useCallback, useMemo } from 'react';
import * as THREE from 'three';
import Analyser from './Analyser,';


export default function useAnalyser( audio, fftSize = 2048 ) {

    const [ analyser, setAnalyser ] = useState();
    useEffect(()=>{
        if(audio) {
            const analyser = new Analyser(audio, fftSize);
            setAnalyser((v)=>analyser);
        }
    },[audio]);

    return analyser;
}


