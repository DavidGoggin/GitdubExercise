// JavaScript code for form validation

// Prevent form from submitting if the input is not valid
document.getElementById("myForm").addEventListener("submit", function(event) {
  // Retrieve the input field value
  let inputField = document.getElementById("inputField").value;

  // Regular expression pattern for alphanumeric input (letters and numbers only)
  let alphanumericPattern = /^[a-zA-Z0-9]+$/;

  // Check if the input value matches the pattern
  if (alphanumericPattern.test(inputField)) {
    // Valid input: display confirmation and allow the form to submit
    alert("Input is valid! Form submitted.");
  } else {
    // Invalid input: display error message and prevent form submission
    alert("Error: Please enter a valid alphanumeric value.");
    event.preventDefault();
  }
});
