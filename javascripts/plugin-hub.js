(() => {
  const grid = document.querySelector('[data-plugin-grid]');
  if (!grid) return;
  const cards = [...grid.querySelectorAll('.plugin-card')];
  const search = document.querySelector('[data-plugin-search]');
  const buttons = [...document.querySelectorAll('[data-plugin-filter]')];
  const empty = document.querySelector('[data-plugin-empty]');
  let category = 'all';

  const apply = () => {
    const query = (search?.value || '').trim().toLocaleLowerCase();
    let visible = 0;
    cards.forEach((card) => {
      const categoryMatch = category === 'all' || card.dataset.category === category;
      const queryMatch = !query || (card.dataset.search || '').toLocaleLowerCase().includes(query);
      const show = categoryMatch && queryMatch;
      card.hidden = !show;
      if (show) visible += 1;
    });
    if (empty) empty.hidden = visible !== 0;
  };

  search?.addEventListener('input', apply);
  buttons.forEach((button) => button.addEventListener('click', () => {
    category = button.dataset.pluginFilter || 'all';
    buttons.forEach((item) => item.classList.toggle('is-active', item === button));
    apply();
  }));
})();
