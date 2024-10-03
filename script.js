// Get the menu icon and navigation links
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

// Toggle the mobile navigation menu
menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Get all the event items, contact items, service items, and modals
const contactItems = document.querySelectorAll('.contact-item');
const serviceItems = document.querySelectorAll('.service-item');
const modals = document.querySelectorAll('.modal');
const eventModal = document.getElementById('eventModal');
const closeModalBtn = eventModal ? eventModal.querySelector('.close') : null;

// Add click event to open the respective modal with the correct event title for contact items
contactItems.forEach(item => {
  item.addEventListener('click', () => {
    const eventTitle = item.querySelector('h2').innerText;
    document.getElementById('eventTitle').innerText = eventTitle;
    if (eventModal) {
      eventModal.style.display = 'flex';
    }
  });
});

// Add click event to open the respective modal for service items
serviceItems.forEach(item => {
  item.addEventListener('click', () => {
    const modalId = item.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'block';
    }
  });
});

// Add event to close modals for both contact and service items
modals.forEach(modal => {
  const closeBtn = modal.querySelector('.close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
});

// Close modals when clicking outside the modal content for both contact and service items
window.addEventListener('click', (event) => {
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
  
  // Close event modal specifically if clicking outside of it
  if (eventModal && event.target === eventModal) {
    eventModal.style.display = 'none';
  }
});

// Close the specific event modal with the close button
if (closeModalBtn) {
  closeModalBtn.addEventListener('click', () => {
    eventModal.style.display = 'none';
  });
}