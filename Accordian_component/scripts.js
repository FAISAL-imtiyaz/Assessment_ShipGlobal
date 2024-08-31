// Event listener for when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'accordion-item'
    const accordionItems = document.querySelectorAll('.accordion-item');

    // Iterate over each accordion item
    accordionItems.forEach(item => {
        // Select the header within the current accordion item
        const header = item.querySelector('.accordion-header');
        
        // Add a click event listener to the header
        header.addEventListener('click', function() {
            // Check if the current accordion item is already active (open)
            const isActive = item.classList.contains('active');
            
            // Close all open accordion items by removing the 'active' class
            accordionItems.forEach(i => i.classList.remove('active'));
            
            // If the clicked item was not active, open it by adding the 'active' class
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});
