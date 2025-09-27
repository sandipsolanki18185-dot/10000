function openGift() {
  const music = document.getElementById('bg-music');
  music.play();
  for (let i = 0; i < 20; i++) {
    createEmoji('😘');
    createEmoji('🤗');
  }
}

function createEmoji(symbol) {
  const emoji = document.createElement('div');
  emoji.className = 'emoji';
  emoji.innerText = symbol;
  emoji.style.left = Math.random() * window.innerWidth + 'px';
  document.body.appendChild(emoji);

  setTimeout(() => { emoji.remove(); }, 4000);
}
