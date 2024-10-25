// E-Lapor
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn");

  if (btn) {
    document
      .getElementById("email-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        btn.textContent = "Sending...";
        const serviceId = "API_serviceId";
        const templateId = "API_templateId";

        emailjs.sendForm(serviceId, templateId, this).then(
          () => {
            btn.textContent = "Send Email";
            Swal.fire({
              icon: "success",
              title: "Email Berhasil",
              text: "Email Anda telah berhasil dikirim!",
            });
            this.reset();
          },
          (err) => {
            btn.textContent = "Send Email";
            Swal.fire({
              icon: "error",
              title: "Gagal Mengirim Email",
              text: `Terjadi kesalahan: ${JSON.stringify(err)}`,
            });
          }
        );
      });
  } else {
    console.error("Element with ID 'btn' not found in the DOM.");
  }
});