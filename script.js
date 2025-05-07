// Function to smoothly scroll to the contact section
function scrollToContact() {
  // Scrolls the element with id 'contact' into view with smooth scrolling behavior
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Event listener for the contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
  // Prevents the default form submission
  e.preventDefault();
  
  // Alerts the user that the message has been sent
  alert('Your message has been sent!');
  
  // Resets the form fields
  this.reset();
});

// Scroll-triggered animation for elements with fade-in classes
const faders = document.querySelectorAll('.fade-in, .fade-in-up');

// IntersectionObserver options for controlling when the element becomes visible
const appearOptions = {
  threshold: 0.2,  // Trigger when 20% of the element is in view
  rootMargin: "0px 0px -50px 0px"  // Offset the trigger point to be slightly below the viewport
};

// IntersectionObserver to handle the appearance of elements when scrolled into view
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // Check if the element has become visible
    if (!entry.isIntersecting) return;
    
    // Makes the element visible and starts the animation
    entry.target.style.opacity = 1;
    entry.target.style.animationPlayState = 'running';
    
    // Stop observing the element once it has appeared
    observer.unobserve(entry.target);
  });
}, appearOptions);

// Set initial state for fade-in elements (paused animation)
faders.forEach(fader => {
  fader.style.animationPlayState = 'paused';  // Pause animation initially
  appearOnScroll.observe(fader);  // Observe each fade-in element
});

// Function to handle the signup process
function handleSignup(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Get the email input and message elements
  const emailInput = document.getElementById('signupEmail');
  const message = document.getElementById('signupMessage');
  
  // Get the trimmed email value
  const email = emailInput.value.trim();
  
  if (email) {
    // Simulate a successful signup process
    message.textContent = "Thanks for signing up!";
    emailInput.value = "";  // Clear the email input field
  } else {
    // Show an error message if the email is empty
    message.textContent = "Please enter a valid email.";
    message.style.color = "red";  // Set error message color
  }
}

// Event listener that fires when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get the form, login button, message container, and user info elements
  const signupForm = document.querySelector('.signup-form');
  const loginBtn = document.getElementById('login-btn');
  const message = document.getElementById('form-message');
  const userIcon = document.getElementById('user-icon');
  const userContainer = document.getElementById('user-container');
  const logoutBtn = document.getElementById('logout-btn');

  // Function to display user info after successful signup or login
  function showUser(email) {
    userIcon.textContent = email;  // Display user email
    userContainer.classList.remove('hidden');  // Show user container
  }

  // Function to hide user info (logout action)
  function hideUser() {
    userContainer.classList.add('hidden');  // Hide user container
    userIcon.textContent = '';  // Clear user icon
    message.textContent = '';  // Clear message
  }

  // Handle the signup process
  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Get email and password values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Check if both email and password are provided
    if (email && password) {
      message.textContent = 'Profile created successfully!';  // Show success message
      message.style.color = 'green';  // Set success message color
      showUser(email);  // Show user info
    } else {
      message.textContent = 'Please enter email and password';  // Show error message
      message.style.color = 'red';  // Set error message color
    }
  });

  // Handle the login process
  loginBtn.addEventListener('click', function () {
    // Get email and password values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Check if both email and password are provided
    if (email && password) {
      message.textContent = 'Login successful!';  // Show success message
      message.style.color = 'green';  // Set success message color
      showUser(email);  // Show user info
    } else {
      message.textContent = 'Please enter email and password';  // Show error message
      message.style.color = 'red';  // Set error message color
    }
  });

  // Handle logout
  logoutBtn.addEventListener('click', function () {
    hideUser();  // Hide user info
    message.textContent = 'You have logged out.';  // Show logout message
    message.style.color = '#f97316';  // Set logout message color (orange)
  });
});