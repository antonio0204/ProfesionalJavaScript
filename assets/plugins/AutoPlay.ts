import MediaPlayer from "../MediaPlayer";

class AutoPlay {
  constructor() {}
  run(player: MediaPlayer) {
    if (!player.media.muted) {
      player.media.mute = true;
    }
    player.play();
  }
}

export default AutoPlay;
