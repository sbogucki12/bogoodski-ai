document.getElementById('revealButton').addEventListener('click', function() {
    // Find the first hidden section
    const hiddenSections = document.querySelectorAll('.reveal-section.hidden');
    if (hiddenSections.length > 0) {
        // Reveal the first hidden section
        hiddenSections[0].classList.remove('hidden');
        
        // If that was the last section, hide or disable the button
        if (hiddenSections.length === 1) {
            this.style.display = 'none'; // or this.disabled = true; if you prefer to disable the button
        }
    }
});