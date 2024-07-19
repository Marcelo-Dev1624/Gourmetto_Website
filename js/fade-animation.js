window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('*'); // select all elements
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const offset = 200; // adjust this value to change the animation trigger point
  
      if (rect.top <= windowHeight - offset && rect.bottom >= offset) {
        element.style.opacity = 1;
        element.style.transform = 'translateY(0)';
      } else {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
      }
    });
  });