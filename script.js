const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    // Toggle dark mode
    document.body.classList.toggle("dark");

    // Change button text
    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️ Whitemode";
    } else {
        themeBtn.textContent = "🌙 Darkmode";
    }
});


const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active"); // ☰ → X
    navLinks.classList.toggle("show");  // Open menu
});

// Initialize EmailJS
emailjs.init("cjc6Hpl8sHLJEB-J7");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.send("service_42yvsg6", "template_khy6tql", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    })
    .then(() => {
        document.getElementById("status").innerHTML =
            "Message sent successfully!";
        form.reset();
    })
    .catch((error) => {
        document.getElementById("status").innerHTML =
            "Failed to send message.";
        console.log(error);
    });
});