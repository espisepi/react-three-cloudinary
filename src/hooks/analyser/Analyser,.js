

// fftSize = 512 || 2048 || potenciaDe2
export default class Analyser {

    constructor(audio, fftSize = 2048) {
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
            
            this.analyser = analyser;
            this.dataArray = dataArray;
        } else {
            console.error('No se ha podido crear el Analyser');
        }
    }

    update() {
        if (this.analyser && this.dataArray) this.analyser.getByteFrequencyData(this.dataArray);
    }

    getLowerMax() {
        const lowerHalfArray = this.getLowerHalfArray();
        return Math.max(...this.getLowerHalfArray()) / lowerHalfArray.length;
    }

    getUpdateLowerMax() {
        this.update();
        return this.getLowerMax();
    }

    getLowerHalfArray() {
        const dataArray = this.dataArray;
        if (dataArray) return dataArray.slice(0, (dataArray.length/2) - 1);
        else           return [0.0];
    }
    
    getUpperHalfArray() {
        const dataArray = this.dataArray;
        if (dataArray) return dataArray.slice((dataArray.length/2) - 1, dataArray.length - 1);
        else           return [0.0];
    }
}







// Chuletilla===================================
// var lowerHalfArray = dataArray.slice(0, (dataArray.length/2) - 1);
// var upperHalfArray = dataArray.slice((dataArray.length/2) - 1, dataArray.length - 1);

// var overallAvg = avg(dataArray);
// var lowerMax = max(lowerHalfArray);
// var lowerAvg = avg(lowerHalfArray);
// var upperMax = max(upperHalfArray);
// var upperAvg = avg(upperHalfArray);

// var lowerMaxFr = lowerMax / lowerHalfArray.length;
// var lowerAvgFr = lowerAvg / lowerHalfArray.length;
// var upperMaxFr = upperMax / upperHalfArray.length;
// var upperAvgFr = upperAvg / upperHalfArray.length;

// makeRoughGround(plane, modulate(upperAvgFr, 0, 1, 0.5, 4));
// makeRoughGround(plane2, modulate(lowerMaxFr, 0, 1, 0.5, 4));