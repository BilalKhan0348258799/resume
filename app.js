// Get references to the buttons and skills section
var toggleButton = document.getElementById("toggle-skills");
var showButton = document.getElementById("show-skills");
var skillsSection = document.getElementById("skills");
// Set initial state (Skills section is visible by default)
skillsSection.style.display = "block";
toggleButton.style.display = "inline"; // Show the "Hide Skills" button
showButton.style.display = "none"; // Hide the "Show Skills" button
// Event listener for the "Hide Skills" button
toggleButton.addEventListener("click", function () {
    skillsSection.style.display = "none"; // Hide the skills section
    toggleButton.style.display = "none"; // Hide the "Hide Skills" button
    showButton.style.display = "inline"; // Show the "Show Skills" button
});
// Event listener for the "Show Skills" button
showButton.addEventListener("click", function () {
    skillsSection.style.display = "block"; // Show the skills section
    toggleButton.style.display = "inline"; // Show the "Hide Skills" button
    showButton.style.display = "none"; // Hide the "Show Skills" button
});
