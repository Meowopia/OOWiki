(() => {
  const path = window.location.pathname.replace(/\/+$/, '');
  if (/\/plugins\/[^/]+$/.test(path)) {
    document.body.classList.add('plugin-wiki-page');
  }
})();
