// Dark-mode toggle (choice remembered per visitor)
document.querySelector('.theme-toggle').addEventListener('click', function () {
  var root = document.documentElement;
  var dark = root.getAttribute('data-theme') !== 'dark';
  if (dark) root.setAttribute('data-theme', 'dark'); else root.removeAttribute('data-theme');
  try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
});

// BibTeX "Cite" toggles on publications
document.querySelectorAll('.cite-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var bib = btn.closest('li').querySelector('.bib');
    bib.hidden = !bib.hidden;
    btn.setAttribute('aria-expanded', String(!bib.hidden));
  });
});
