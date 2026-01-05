function toggleTheme() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}

/* WhatsApp Redirect on Card Click */
const whatsappNumber = "27682528591"; // + hata ke number

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const serviceName = card.getAttribute("data-service");

    const message = encodeURIComponent(
      `Hello Networking-X 👋\n\nI am interested in your service:\n👉 ${serviceName}\n\nPlease share more details.`
    );

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
  });
});
