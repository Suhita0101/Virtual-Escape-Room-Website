document.addEventListener("DOMContentLoaded", () => {
    // Handle splash screen transition
    setTimeout(() => {
        const splashScreen = document.getElementById("splash-screen");
        splashScreen.style.opacity = "0"; // Start fade-out
        setTimeout(() => {
            splashScreen.style.display = "none"; // Remove splash screen after fade-out
            const mainPage = document.getElementById("main-page");
            mainPage.style.display = "block"; // Display main page
            setTimeout(() => {
                mainPage.style.opacity = "1"; // Fade-in main page
                document.getElementById("main-content").classList.add("active"); // Show default section
            }, 50); // Delay to ensure proper rendering
        }, 1000); // Matches the CSS transition duration
    }, 3000); // Initial delay for splash screen display
    
    // Navigation bar click event
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const sectionId = link.getAttribute("data-section");

            // Hide all sections and show the selected one
            document.querySelectorAll(".section").forEach(section => {
                section.classList.remove("active");
                section.classList.add("hidden");
            });
            document.getElementById(sectionId).classList.add("active");
        });
    });
});

// JavaScript to handle the form and show the popup
document.getElementById("join-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Gather form data
    const name = document.getElementById("name").value;
    const roomType = document.getElementById("room-type").value;

    // Show the popup
    const popup = document.getElementById("popup");
    const message = document.getElementById("popup-message");
    popup.classList.remove("hidden");

    // Personalized message
    message.textContent = `Hi ${name}, get ready! Your virtual escape room: "${roomType}" is being prepared.`;

    // Automatically hide the popup after a few seconds
    setTimeout(() => {
        popup.classList.add("hidden");
        console.log("Popup closed."); // Debug message to confirm the timeout
    }, 5000); // 5 seconds
});

let lastScrollTop = 0;
const sections = document.querySelectorAll('.fade-section'); // All sections with the class .fade-section

window.addEventListener('scroll', function() {
  let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight && sectionTop > 0) {
      // When the section is in view
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        section.classList.add('visible');
      } else {
        // Scrolling up
        section.classList.remove('visible');
      }
    }
  });

  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Prevent negative scroll
});


// Get modal and close button elements
var modal = document.getElementById("review-modal");
var closeBtn = document.getElementsByClassName("close-btn")[0];

// Get the form element
var form = document.getElementById("review-form");

// When the form is submitted
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from reloading the page

    // Display the modal
    modal.style.display = "block";

    // Set a timer to hide the modal after 3 seconds
    setTimeout(function() {
        modal.style.display = "none";
    }, 6000); // 3000 milliseconds = 3 seconds
});

// When the user clicks the close button, close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}






