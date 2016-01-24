// Singleton

let instance = null;

class Oscillator {
  constructor() {
    if(!instance){
      this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      this.play = this.play.bind(this);

      instance = this;
    }

    return instance;
  }

  play(hz) {
    let oscillator = this.audioCtx.createOscillator();

    oscillator.connect(this.audioCtx.destination);
    oscillator.frequency.value = hz;
    oscillator.start();

    setTimeout(() => oscillator.stop(), 500);
  }

}

export default Oscillator;
