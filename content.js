
function createGoogleTabSpan(labelText) {
  const span = document.createElement('span');
  span.innerText = labelText;
  Object.assign(span.style, {
    borderBottomColor: 'transparent',
    color: '#80868b',
    fontWeight: '500',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    width: 'fit-content',
    fontFamily: 'Google Sans, Arial, sans-serif',
    fontSize: '14px',
    lineHeight: '20px',
    borderBottom: '3px solid transparent',
    paddingBottom: '8px'
  });
  return span;
}
function createGoogleTabDiv() {
  const div = document.createElement('div');
  Object.assign(div.style, {
    display: "flex",
    minHeight: "48px",
    padding: "0 12px",
    columnGap: "2px",
    alignItems: "end"
  });
  return div;
}

function addMapsButton() {
  const navBar = document.querySelector('div[role="navigation"]');
  if (!navBar || document.querySelector('#maps-button')) return;

  // Essayer d'insérer après le premier lien de navigation
  const firstLink = navBar.querySelector('a');
  if (!firstLink) return;

  const mapsBtn = firstLink.cloneNode(true);
  mapsBtn.id = "maps-button";
  mapsBtn.innerText = "";

  const innerSpan = createGoogleTabSpan('Maps');
  const innerDiv = createGoogleTabDiv();
  innerDiv.appendChild(innerSpan);
  mapsBtn.appendChild(innerDiv);

  const query = new URLSearchParams(window.location.search).get('q') || '';
  mapsBtn.href = `https://www.google.com/maps/search/${encodeURIComponent(query)}`;

  const wrapper = document.createElement('div');
  wrapper.setAttribute('role', 'listitem');
  wrapper.appendChild(mapsBtn);

  firstLink.parentNode.parentNode.insertBefore(wrapper, firstLink.parentNode.nextSibling);
}


// Injection dynamique via MutationObserver
const observer = new MutationObserver(() => {
  addMapsButton();
});

observer.observe(document.body, { childList: true, subtree: true });
