const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioContext =  new AudioContext();

const audioElement = document.querySelector("audio");
const track = audioContext.createMediaElementSource(audioElement);

track.connect(audioContext.destination);

const gainNode = audioContext.createGain();

const loginImage = document.querySelector("#login");
loginImage.addEventListener("mouseover", () => {
    // Autoplay policy - it may block the audio to start, so checking if it's suspended
    if (audioContext.state === "suspended") {
        audioContext.resume();
    }

    audioElement.play();

    gainNode.gain.value = 10;
  
});

const hino = document.querySelector("#hino");
// Add on click event on button to stop the audio
hino.addEventListener("click", () => {
    audioElement.pause();
});

// Don't let the audio stop
audioElement.addEventListener("ended", () => {
    audioElement.play();
},
false
);
