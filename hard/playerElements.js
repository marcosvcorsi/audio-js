import { formatTime } from './utils.js'

export default {
    get() {
        this.cover = document.querySelector('.card-image');
        this.title = document.querySelector('.card-content h5');
        this.artist = document.querySelector('.artist');
        this.playPause = document.querySelector('#play-pause');
        this.vol = document.querySelector('#vol');
        this.volume = document.querySelector('#vol-control');
        this.seekbar = document.querySelector('#seekbar');
        this.currentDuration = document.querySelector("#current-duration");
        this.totalDuration = document.querySelector("#total-duration");
    },

    createAudioElement(source) {
        this.audio = new Audio(source);
    },

    actions() {
        this.audio.onended = () => this.next();
        this.playPause.onclick = () => this.togglePlayPause();
        this.vol.onclick = () => this.toggleMute();
        this.volume.oninput = () => this.setVolume(this.volume.value);
        this.volume.onchange = () => this.setVolume(this.volume.value);
        this.seekbar.oninput = () => this.setSeek(this.seekbar.value);
        this.seekbar.onchange = () => this.setSeek(this.seekbar.value);

        this.totalDuration.innerText = formatTime(this.audio.duration);
        this.seekbar.max = this.audio.duration;

        this.audio.ontimeupdate = () => this.timeUpdate();
    }
}