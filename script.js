// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
// Scroll-reveal for elements marked .reveal
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach((el) => io.observe(el));
} else {
  // fallback: just show everything
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// ============ INTRO SPLASH ============
function dismissIntro() {
  const splash = document.getElementById('introSplash');
  if (!splash) return;
  splash.classList.add('hide');
  setTimeout(() => splash.remove(), 550);
}

(function () {
  const video = document.getElementById('introVideo');
  if (!video) return;

  // Auto-dismiss once the video finishes playing
  video.addEventListener('ended', dismissIntro);

  // Safety net: if video fails to load or play, don't block the homepage
  video.addEventListener('error', dismissIntro);
  setTimeout(dismissIntro, 8000); // hard cap in case autoplay is blocked
})();
