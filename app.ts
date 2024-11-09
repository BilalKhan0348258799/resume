// Get references to the buttons and skills section
const toggleButton = document.getElementById("toggle-skills") as HTMLButtonElement;
const showButton = document.getElementById("show-skills") as HTMLButtonElement;
const skillsSection = document.getElementById("skills") as HTMLElement;

// Set initial state (Skills section is visible by default)
skillsSection.style.display = "block";
toggleButton.style.display = "inline"; // Show the "Hide Skills" button
showButton.style.display = "none"; // Hide the "Show Skills" button

// Event listener for the "Hide Skills" button
toggleButton.addEventListener("click", () => {
  skillsSection.style.display = "none"; // Hide the skills section
  toggleButton.style.display = "none"; // Hide the "Hide Skills" button
  showButton.style.display = "inline"; // Show the "Show Skills" button
});

// Event listener for the "Show Skills" button
showButton.addEventListener("click", () => {
  skillsSection.style.display = "block"; // Show the skills section
  toggleButton.style.display = "inline"; // Show the "Hide Skills" button
  showButton.style.display = "none"; // Hide the "Show Skills" button
});


