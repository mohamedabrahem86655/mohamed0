// Add event listeners to buttons (optional)
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Handle button click event (e.g., show details)
        alert('Details for this domain will be shown here.');
    });
});