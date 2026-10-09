/* =========================================================
   MAIN NAVIGATION
========================================================= */

function showTab(tabId) {

  // Find requested section
  const targetSection = document.getElementById(tabId);

  // Stop if section does not exist
  if (!targetSection) {
    console.error(`Section with id="${tabId}" was not found.`);
    return;
  }

  // Hide all sections
  document.querySelectorAll('.tab-section').forEach(section => {
    section.classList.remove('active');
  });

  // Show selected section
  targetSection.classList.add('active');


  // Remove active state from navbar links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active-link');
  });

  // Highlight selected navbar link
  const activeNav = document.getElementById('nav-' + tabId);

  if (activeNav) {
    activeNav.classList.add('active-link');
  }


  // Close mobile navbar if it is open
  const menu = document.getElementById('navbarNav');

  if (menu && menu.classList.contains('show')) {

    const bsCollapse =
      bootstrap.Collapse.getOrCreateInstance(menu);

    bsCollapse.hide();
  }


  // Return to top of page
  window.scrollTo({
    top: 0,
    behavior: 'instant'
  });
}


/* =========================================================
   GALLERY LIGHTBOX
========================================================= */

function openGalleryImage(image) {

  const modalElement =
    document.getElementById('galleryModal');

  const modalImage =
    document.getElementById('galleryModalImage');

  const modalCaption =
    document.getElementById('galleryModalCaption');


  // Safety check
  if (!modalElement || !modalImage || !modalCaption) {
    console.error('Gallery modal elements were not found.');
    return;
  }


  // Put clicked image into modal
  modalImage.src = image.src;
  modalImage.alt = image.alt;


  // Find gallery item
  const galleryItem = image.closest('.gallery-item');

  if (galleryItem) {

    const title =
      galleryItem.querySelector('.gallery-caption h5');

    const description =
      galleryItem.querySelector('.gallery-caption p');


    modalCaption.innerHTML = `
      <h5>${title ? title.textContent : ''}</h5>
      <p>${description ? description.textContent : ''}</p>
    `;

  } else {

    modalCaption.innerHTML = '';

  }


  // Open Bootstrap modal
  const galleryModal =
    bootstrap.Modal.getOrCreateInstance(modalElement);

  galleryModal.show();
}