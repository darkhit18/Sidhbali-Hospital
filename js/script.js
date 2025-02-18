// script.js

// Dropdown Menu for Bootstrap 4
$(document).ready(function(){
    $('.navbar-toggler').click(function(){
        $('.navbar-collapse').toggleClass('show');
    });
});

// JavaScript to handle form submission
document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const doctor = document.getElementById('doctor').value;

    // Validate form (optional)
    if (name && email && doctor) {
        alert(`Appointment booked for ${name} with ${doctor}.`);
        // Optionally, clear the form after submission
        this.reset();
        // Hide modal (optional)
        $('#appointmentModal').modal('hide');
    } else {
        alert('Please fill out all fields!');
    }
});
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
