// Toogles menu items
const showMenu = () => {
  document.querySelector('.nav-links').classList.toggle('active')
}
// Get all links in the navbar
const navLinks = document.querySelectorAll('.nav-links a');

// Loop through each link and add an event listener
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    const href = this.getAttribute('href'); // get the href value of the clicked link
    showMenu ();
    // Remove the class from all links
    navLinks.forEach(link => {
      link.classList.remove('active-link');
    });
    // Add the class to the clicked link
    this.classList.add('active-link');
    scrollToSection(href)
  });
});

const scrollToSection = (sectionId) => {
  const targetId = this.getAttribute(sectionId);
  const targetSection = document.querySelector(targetId);
  targetSection.scrollIntoView({behavior: 'smooth'});
}

const createSections = () => {
  const sectionNames = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];
  const main = document.querySelector('main');

  for (let i = 0; i < sectionNames.length; i++) {
    const section = document.createElement('section');
    section.setAttribute('id', sectionNames[i].toLowerCase());
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = sectionNames[i];
    div.appendChild(h2);
    section.appendChild(div);
    main.appendChild(section);
  }
}
createSections();