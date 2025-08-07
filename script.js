// Ambient audio toggle for accessibility and user control
const audio = document.getElementById('bg-audio');
const btn = document.getElementById('audio-toggle');
let muted = true;

function updateAudioIcon() {
  btn.innerHTML = muted
    ? '<svg height="24" width="24" fill="#bfa14a"><use href="#sound-off"></use></svg>'
    : '<svg height="24" width="24" fill="#bfa14a"><use href="#sound-on"></use></svg>';
}

btn.addEventListener('click', () => {
  muted = !muted;
  audio.muted = muted;
  updateAudioIcon();
});
updateAudioIcon();

// Keyboard accessibility for toggle
btn.addEventListener('keydown', (e) => {
  if (e.key === "Enter" || e.key === " ") {
    btn.click();
    e.preventDefault();
  }
});