class MediaPlayer {
  mute() {
    throw new Error("Method not implemented.");
  }
  unmute() {
    throw new Error("Method not implemented.");
  }
  media: HTMLMediaElement;
  plugins: Array<any>;

  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlugins();
  }
  private initPlugins() {
    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  togglePlay() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  }
  toggleMute() {
    this.media.muted ? (this.media.muted = false) : (this.media.muted = true);
  }
}

const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
});

const button = document.querySelector("button");
button.onclick = () => player.togglePlay();

export default MediaPlayer;
