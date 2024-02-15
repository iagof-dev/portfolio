

function glitch(){
const element = document.querySelector('.glitch')
console.log("a");
PowerGlitch.glitch(element,
    {
        "playMode": "always",
        "createContainers": true,
        "hideOverflow": false,
        "timing": {
          "duration": 2000
        },
        "glitchTimeSpan": {
          "start": 0.5,
          "end": 0.7
        },
        "shake": {
          "velocity": 60,
          "amplitudeX": 0.29,
          "amplitudeY": 0.2
        },
        "slice": {
          "count": 48,
          "velocity": 33,
          "minHeight": 0.02,
          "maxHeight": 0.15,
          "hueRotate": true
        },
        "pulse": false
      });
}