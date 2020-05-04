import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";

const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

// const playButton: HTMLElement = document.querySelector("#playButton");
// playButton.onclick = () => player.togglePlay();

// const unmuteButton: HTMLElement = document.querySelector("#unmuteButton");
// unmuteButton.onclick = () => {
//   if (player.media.muted) {
//     player.unmute();
//   } else {
//     player.mute();
//   }
// };

const unmuteButton = document.querySelector("#unmuteButton");
unmuteButton.onclick = () => player.toggleMute();

const button = document.querySelector("button");
button.onclick = () => player.togglePlay();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch((error) => {
    console.log(error.message);
  });
}
