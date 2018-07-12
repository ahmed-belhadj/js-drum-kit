window.addEventListener("keydown", function(event) {
  const audio = this.document.querySelector(
    `audio[data-key="${event.keyCode}"]`
  );
  const key = this.document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();
  //   this.console.log(key);
  key.classList.add("playing");
});
