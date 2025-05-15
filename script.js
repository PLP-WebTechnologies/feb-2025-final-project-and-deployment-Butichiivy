document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signup-form');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailFeedback = document.getElementById('email-feedback');
  const passwordFeedback = document.getElementById('password-feedback');
  const themeSelector = document.getElementById('theme-selector');

  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.classList.add(savedTheme);
    themeSelector.value = savedTheme;
  }

  // Form validation
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    let valid = true;

    // Email validation
    if (!/\S+@\S+\.\S+/.test(emailValue)) {
      emailFeedback.textContent = 'Please enter a valid email.';
      valid = false;
    } else {
      emailFeedback.textContent = '';
    }

    // Password validation
    if (passwordValue.length < 8) {
      passwordFeedback.textContent = 'Password must be at least 8 characters.';
      valid = false;
    } else {
      passwordFeedback.textContent = '';
    }

    if (valid) {
      alert('Subscribed successfully!');
      localStorage.setItem('theme', themeSelector.value);
    }
  });

  // Theme switching
  themeSelector.addEventListener('change', (e) => {
    document.body.className = ''; // Reset
    document.body.classList.add(e.target.value);
    localStorage.setItem('theme', e.target.value);
  });

  // Read more button animations
  document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
      button.textContent = 'Thanks for reading!';
      button.style.backgroundColor = '#43a047';
      button.style.transform = 'scale(1.05)';
      setTimeout(() => {
        button.textContent = 'Read More';
        button.style.backgroundColor = '';
        button.style.transform = '';
      }, 2000);
    });
  });
});
