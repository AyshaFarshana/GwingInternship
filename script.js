  // Sidebar toggle
function showSidebar() {
  document.querySelector(".sidebar").style.display = "flex";
}
function hideSidebar() {
  document.querySelector(".sidebar").style.display = "none";
}

// Slider functionality
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".slider .item");
  let current = 0;

  function showSlide(index) {
    items.forEach((item, i) => {
      item.classList.toggle("active", i === index);
    });
    current = index;
  }

  document.getElementById("next").addEventListener("click", () => {
    current = (current + 1) % items.length;
    showSlide(current);
  });

  document.getElementById("prev").addEventListener("click", () => {
    current = (current - 1 + items.length) % items.length;
    showSlide(current);
  });

  // Optional auto-slide every 5 seconds
  setInterval(() => {
    current = (current + 1) % items.length;
    showSlide(current);
  }, 5000);
});




  // Contact Form EmailJS
  emailjs.init("41_F16Mt7iuqBW4gY");
  const form = document.getElementById("contactForm");
  const msgDiv = document.getElementById("formMsg");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      msgDiv.textContent = "Please fill in all fields.";
      msgDiv.className = "message error";
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message
    };

    emailjs.send("service_ek75yif", "template_nuffb5y", templateParams)
      .then(() => {
        msgDiv.textContent = "Message sent to your email!";
        msgDiv.className = "message success";
        form.reset();
      }, (error) => {
        msgDiv.textContent = "Failed to send message. Try again.";
        msgDiv.className = "message error";
        console.error("EmailJS error:", error);
      });
  });
