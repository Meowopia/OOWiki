(() => {
  const path = window.location.pathname.replace(/\/+$/, '');
  if (/\/plugins\/[^/]+$/.test(path)) {
    document.body.classList.add('plugin-wiki-page');
  }
})();

(() => {
 const openSearch = () => { const toggle = document.getElementById('__search'); if(toggle) { toggle.checked = true; toggle.dispatchEvent(new Event('change')); } document.querySelector('[data-md-component="search-query"]')?.focus(); };
 document.querySelector('[data-open-doc-search]')?.addEventListener('click', openSearch);
 document.addEventListener('keydown', e => { if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSearch(); } });
 document.querySelectorAll('.ovo-navbar-links a').forEach(a => { if (new URL(a.href).pathname === location.pathname) a.setAttribute('aria-current','page'); });
})();
