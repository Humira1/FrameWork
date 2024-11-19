f (
  'serviceWorker' in navigator
  )
   { 
    window.addEventListener
    (
      'load', () =>
       { 
          navigator.serviceWorker.register
          ('/serviceWorker.js').then(registration => 
            {
                  console.log('ServiceWorker registration successful with scope: ', registration.scope); 

                     },
                      err => 
                      {
                            console.log('ServiceWorker registration failed: ', err); 
                               }); 
                                });
  
}



// Scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Form submission (mock functionality)
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message!');
});
