(() => {
  const grid = document.querySelector('[data-plugin-grid]');
  if (!grid) return;
  const cards = [...grid.querySelectorAll('.plugin-card')];
  const search = document.querySelector('[data-plugin-search]');
  const empty = document.querySelector('[data-plugin-empty]');

  const apply = () => {
    const query = (search?.value || '').trim().toLocaleLowerCase();
    let visible = 0;
    cards.forEach((card) => {
      const queryMatch = !query || (card.dataset.search || '').toLocaleLowerCase().includes(query);
      const show = queryMatch;
      card.hidden = !show;
      if (show) visible += 1;
    });
    if (empty) empty.hidden = visible !== 0;
  };

  search?.addEventListener('input', apply);
})();
