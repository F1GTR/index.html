// Trigger animation on refresh
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.animation = 'none';
    void navbar.offsetWidth; // Trigger reflow
    navbar.style.animation = 'fadeDown 1s ease-in-out';

    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn'); // Replace with actual login check
    const signUpButton = document.getElementById('signUpButton');
    const profileButton = document.getElementById('profileButton');
    const profilePic = document.getElementById('profilePic');
    const dropdownMenu = document.getElementById('dropdownMenu');

    if (isLoggedIn) {
        // Set user profile picture (replace with actual logic to fetch user's profile picture)
        profilePic.src = 'user-profile-pic.jpg'; // Replace with actual user profile pic URL

        // Show profile button, hide sign up button
        signUpButton.style.display = 'none';
        profileButton.style.display = 'flex';
    } else {
        // Show sign up button, hide profile button
        signUpButton.style.display = 'inline-block';
        profileButton.style.display = 'none';
    }

    // Toggle dropdown menu visibility
    profileButton.addEventListener('click', () => {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });
});
