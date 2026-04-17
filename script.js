function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const page = document.getElementById('page-' + id);
    if (page) page.classList.add('active');

    document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
      a.classList.toggle('active', a.dataset.page === id);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    const nav = document.getElementById('main-nav');
    nav.classList.remove('open');

    return false;
  }

  function toggleMenu() {
    document.getElementById('main-nav').classList.toggle('open');
  }