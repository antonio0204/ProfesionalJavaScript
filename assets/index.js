import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  // plugins: [new AutoPlay]
});

const unmuteButton = document.querySelector('#unmuteButton')
unmuteButton.onclick = () => player.toggleMute()

const button = document.querySelector('button');
button.onclick = () => player.togglePlay();