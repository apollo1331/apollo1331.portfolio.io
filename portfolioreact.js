// Get all elements with the class 'toggle-description'
const toggleButtons = document.querySelectorAll('.toggle-description');

// Add a click event listener to each button
toggleButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Find the associated project description
        const description = this.previousElementSibling;

        // Toggle the visibility of the project description
        description.classList.toggle('show-description');

        // Change the button text based on the description visibility
        const buttonText = description.classList.contains('show-description') ? 'Hide Description' : 'Show Description';
        this.textContent = buttonText;
    });
});
