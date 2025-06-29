function addMapsButton() {
  const navBar = document.querySelector('div[role="navigation"]');
  if (!navBar) return;

  // Ne pas dupliquer le bouton
  if (document.querySelector('#maps-button')) return;

  // Récupère la requête de recherche
  const query = new URLSearchParams(window.location.search).get('q') || '';
  const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(query)}`;

  // Crée le <div role="listitem">
  const listItem = document.createElement('div');
  listItem.setAttribute('role', 'listitem');
  listItem.setAttribute('data-hveid', 'EXT'); // facultatif

  // Crée le <a>
  const link = document.createElement('a');
  link.id = 'maps-button';
  link.href = mapsUrl;
  link.className = 'nPDzT T3FoJb';
  link.setAttribute('role', 'link');
  link.style.color = '#9aa0a6';

  // Crée le texte "Maps"
  const label = document.createElement('div');
  label.className = 'YmvwI';
  label.textContent = 'Maps';

  // Assemble
  link.appendChild(label);
  listItem.appendChild(link);

  // Trouver le bon emplacement après "Vidéos"
  const navItems = Array.from(navBar.querySelectorAll('div[role="listitem"]'));
  const videoItem = navItems.find(item =>
    item.innerText.toLowerCase().includes('vidéo') || item.innerText.toLowerCase().includes('video')
  );

  if (videoItem) {
    videoItem.insertAdjacentElement('afterend', listItem);
  } else {
    navBar.appendChild(listItem); // fallback à la fin
  }
}

// Injection dynamique via MutationObserver
const observer = new MutationObserver(() => {
  addMapsButton();
});

observer.observe(document.body, { childList: true, subtree: true });
