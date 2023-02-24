// Get a reference to the contact form and the "Message Received" paragraph
const form = document.querySelector('#contact-form');
const messageReceived = document.querySelector('#message-received');

// Add an event listener to the form's submit button
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting and reloading the page
  event.preventDefault();

  // Clear any existing text in the "Message Received" paragraph
  messageReceived.textContent = '';

  // Define the text to be typed out
  const text = "Rock on! We've received your message and will be in touch.";

  // Define the typing speed in milliseconds per character
  const typingSpeed = 50;

  // Define the time delay before the "Message Received" text disappears in milliseconds
  const delayTime = 3000;

  // Define a counter variable to keep track of the current character being typed
  let i = 0;

  // Define a timer function that adds a new character to the "Message Received" paragraph
  function typeLetter() {
    if (i < text.length) {
      messageReceived.textContent += text.charAt(i);
      i++;
      setTimeout(typeLetter, typingSpeed);
    } else {
      // After the text has finished typing, set a timer to hide the "Message Received" paragraph
      setTimeout(function() {
        messageReceived.style.display = 'none';

        // Clear the form fields after the "Message Received" text has been displayed
        form.reset();
      }, delayTime);
    }
  }

  // Show the "Message Received" paragraph
  messageReceived.style.display = 'block';

  // Start the typing animation
  typeLetter();
});