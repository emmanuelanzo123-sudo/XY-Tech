
"use strict";

// =====================================
// XY TECH WEBSITE JAVASCRIPT
// =====================================

// Your official WhatsApp number in international format.
// Do not include the + sign or spaces.
const WHATSAPP_NUMBER = "256763305048";

// 1. MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after a navigation link is clicked.
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// 2. OPEN WHATSAPP WITH A MESSAGE

function openWhatsApp(message) {
  const encodedMessage = encodeURIComponent(message);

  const whatsappURL =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  // Open WhatsApp in a new tab.
  window.open(whatsappURL, "_blank", "noopener,noreferrer");
}

// 3. COURSE ENROLLMENT BUTTONS

const enrollmentButtons = document.querySelectorAll(".enroll-btn");

enrollmentButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const course = button.dataset.course;

    const message =
      `Hello XY Tech!\n\n` +
      `My name is __________.\n` +
      `I am interested in the ${course} course.\n\n` +
      `Please share the course fees, duration, ` +
      `next intake and enrollment requirements.`;

    openWhatsApp(message);
  });
});

// 4. CONTACT FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
  // Stop the browser from reloading the page.
  event.preventDefault();

  // Read the information entered by the visitor.
  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const interest = document.getElementById("interest").value;
  const message = document.getElementById("message").value.trim();

  // Basic validation.
  if (!name || !email || !interest || !message) {
    alert("Please complete all the required fields.");
    return;
  }

  // Prepare the WhatsApp enquiry.
  const whatsappMessage =
    `Hello XY Tech!\n\n` +
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Enquiry type: ${interest}\n\n` +
    `Message:\n${message}`;

  // Open WhatsApp with the visitor's details filled in.
  openWhatsApp(whatsappMessage);
});

// 5. AUTOMATIC COPYRIGHT YEAR

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();