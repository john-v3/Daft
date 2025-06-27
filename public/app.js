// public/app.js

const queue = [];
let isPlaying = false;

window.queueSound =  function (src) {
  queueSound(src);
}
  
function queueSound(src) {
  const audio = new Audio(src);
  queue.push(audio);

  if (!isPlaying) {
    playNext();
  }
}

function playNext() {
  if (queue.length === 0) {
    isPlaying = false;
    return;
  }

  isPlaying = true;
  const audio = queue.shift();
  audio.play();

  audio.addEventListener("ended", () => {
    playNext();
  });
}

