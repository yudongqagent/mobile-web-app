let tapCount = 0;
const btn = document.getElementById('actionBtn');
const counter = document.getElementById('counter');

btn.addEventListener('click', () => {
  tapCount++;
  counter.textContent = `Taps: ${tapCount}`;
  
  // Add a fun animation
  btn.style.transform = 'scale(0.95)';
  setTimeout(() => {
    btn.style.transform = 'scale(1)';
  }, 100);
  
  // Change color every 5 taps
  if (tapCount % 5 === 0) {
    const hues = [260, 280, 300, 320, 340];
    const hue = hues[(tapCount / 5) % hues.length];
    btn.style.background = `linear-gradient(135deg, hsl(${hue}, 70%, 60%) 0%, hsl(${hue + 30}, 70%, 50%) 100%)`;
  }
});

// Add touch feedback for mobile
btn.addEventListener('touchstart', () => {
  btn.style.transform = 'scale(0.97)';
}, { passive: true });

btn.addEventListener('touchend', () => {
  btn.style.transform = 'scale(1)';
}, { passive: true });

// Register service worker for offline support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // Sw registration failed, but app still works
    });
  });
}

// Add some entrance animation
document.querySelectorAll('.card').forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  setTimeout(() => {
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  }, 100 + index * 100);
});