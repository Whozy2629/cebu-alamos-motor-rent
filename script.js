const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const menu = document.getElementById("menu");
const bookingForm = document.getElementById("bookingForm");
const selectedUnit = document.getElementById("selectedUnit");
const rentalDate = document.getElementById("rentalDate");

if (rentalDate) {
  const today = new Date().toISOString().split("T")[0];
  rentalDate.value = today;
  rentalDate.min = today;
}

if (mobileMenuBtn && menu) {
  mobileMenuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
}

document.querySelectorAll("[data-unit]").forEach((button) => {
  button.addEventListener("click", () => {
    if (selectedUnit) {
      const unit = button.getAttribute("data-unit");
      const option = Array.from(selectedUnit.options).find((item) =>
        item.textContent.toLowerCase().includes(unit.toLowerCase().split(" ")[0])
      );

      if (option) {
        selectedUnit.value = option.value;
      }
    }
  });
});

if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const unit = document.getElementById("selectedUnit").value;
    const date = document.getElementById("rentalDate").value;
    const time = document.getElementById("rentalTime").value;
    const message = document.getElementById("message").value.trim();

    const subject = encodeURIComponent("Cebu Alamos Booking Request");
    const body = encodeURIComponent(
      `Full Name: ${fullName}\n` +
      `Phone Number: ${phoneNumber}\n` +
      `Selected Unit: ${unit}\n` +
      `Preferred Date: ${date || "Not specified"}\n` +
      `Preferred Time: ${time || "Not specified"}\n` +
      `Message: ${message || "No additional message"}`
    );

    window.location.href = `mailto:cebualamos@gmail.com?subject=${subject}&body=${body}`;
  });
}
