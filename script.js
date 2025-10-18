// ===== Mobile Menu Toggle =====
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-links');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('active'));
}

// ===== Contact Form Validation =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const numberInput = document.getElementById('number');
  const messageInput = document.getElementById('message');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const number = numberInput.value.trim();
    const message = messageInput.value.trim();

    if (name === '') {
      alert('Please enter your name.');
      nameInput.focus();
      return;
    }

    if (email === '') {
      alert('Please enter your email.');
      emailInput.focus();
      return;
    } else if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      emailInput.focus();
      return;
    }

    if (number === '') {
      alert('Please enter your number.');
      numberInput.focus();
      return;
    } else if (!/^\d{10}$/.test(number)) {
      alert('Please enter a valid 10-digit number.');
      numberInput.focus();
      return;
    }

    if (message === '') {
      alert('Please enter your message.');
      messageInput.focus();
      return;
    }

    alert('Thank you for submitting your message!');
    contactForm.reset();
  });

  // Email validation function
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }
}

// ===== Add Post Form Validation =====
const addPostForm = document.querySelector('.add-post form');
if (addPostForm) {
  const titleInput = addPostForm.querySelector('input[type="text"]');
  const imageInput = addPostForm.querySelector('input[type="file"]');
  const contentInput = addPostForm.querySelector('textarea');

  addPostForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission

    const title = titleInput.value.trim();
    const content = contentInput.value.trim();
    const image = imageInput.files[0]; // get the selected file

    if (title === '') {
      alert('Please enter a post title.');
      titleInput.focus();
      return;
    }

    if (!image) {
      alert('Please upload an image.');
      imageInput.focus();
      return;
    }

    if (content === '') {
      alert('Please write some content.');
      contentInput.focus();
      return;
    }

    alert('Your post has been successfully published!');
    addPostForm.reset();
  });
}
