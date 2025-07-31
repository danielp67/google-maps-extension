
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
  if (!navBar) return;

  // Évite les doublons
  if (document.querySelector('#maps-button')) return;

  const videosBtn = Array.from(navBar.querySelectorAll('a')).find(a => a.innerText.toLowerCase().includes('vidéo'));

  if (videosBtn) {
    const mapsBtn = videosBtn.cloneNode(true);
    mapsBtn.id = "maps-button";

    // Clear the anchor text
    mapsBtn.innerText = "";

    // Create a div inside the anchor
    const innerSpan = createGoogleTabSpan('Maps');
    const innerDiv = createGoogleTabDiv();
    innerDiv.appendChild(innerSpan);
    mapsBtn.appendChild(innerDiv);

    // Met à jour le lien de redirection
    const query = new URLSearchParams(window.location.search).get('q') || '';
    mapsBtn.href = `https://www.google.com/maps/search/${encodeURIComponent(query)}`;

    // Clone the parent div (which has role="listitem")
    const parentDiv = videosBtn.parentNode;
    const newParentDiv = parentDiv.cloneNode(false); // shallow clone without children

    // Add the Maps button to the new div
    newParentDiv.appendChild(mapsBtn);

    // Insert the new div after the original div
    parentDiv.parentNode.insertBefore(newParentDiv, parentDiv.nextSibling);
  }
}

// Injection dynamique via MutationObserver
const observer = new MutationObserver(() => {
  addMapsButton();
});

observer.observe(document.body, { childList: true, subtree: true });
