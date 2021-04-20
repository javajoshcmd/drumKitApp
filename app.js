const playSound=(e) => {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // adds the key pressed into the audio data-key
    // if matching with html
    // audio plays
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  }
  
  function removeTransition() {
    this.classList.remove("playing");
  }
  
  window.addEventListener("keydown", playSound);
  const keys = Array.from(document.querySelectorAll(".key"));
  keys.forEach(key => key.addEventListener("transitionend", removeTransition));