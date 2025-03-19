(function() {
    let outlineColors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];
    let shadowColors = ['rgba(255, 0, 0, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(0, 0, 255, 0.5)', 'rgba(255, 255, 0, 0.5)', 'rgba(255, 165, 0, 0.5)', 'rgba(128, 0, 128, 0.5)'];
    let colorIndex = 0;

    // Function to apply the styles
    function highlightFocus(element) {
        // Reset outline and box-shadow for all elements
        document.querySelectorAll('*').forEach(el => {
            el.style.outline = '';
            el.style.boxShadow = '';
        });

        // Apply new outline and shadow to the focused element
        element.style.outline = `3px solid ${outlineColors[colorIndex]}`;
        element.style.boxShadow = `0 0 10px 5px ${shadowColors[colorIndex]}`;

        // Print the currently focused element
        console.log('Currently focused element:', element);
        
        // Change color for next focus
        colorIndex = (colorIndex + 1) % outlineColors.length;
    }

    // Listen for the focus event
    document.addEventListener('focusin', function(event) {
        highlightFocus(event.target);
    });
})();
