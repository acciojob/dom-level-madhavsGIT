//your JS code here. If required.
window.onload = function() {
    // Function to determine the DOM level of the element
    function getDomLevel(element) {
        let level = 0;
        while (element.parentElement) {
            level++;
            element = element.parentElement;
        }
        return level;
    }

    // Get the element with id "level"
    const targetElement = document.getElementById('level');

    // Determine the DOM level
    const domLevel = getDomLevel(targetElement);

    // Display the result using alert
    alert(`The level of the element is: ${domLevel}`);
};
