//scroll to up when reload
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }