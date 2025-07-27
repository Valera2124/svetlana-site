// modal.js

function openForm(serviceTitle) {
  const modal = document.getElementById("modal");
  const title = document.getElementById("modal-title");
  const form = document.getElementById("modal-form");
  const successMessage = document.getElementById("modal-success");

  title.textContent = serviceTitle;
  modal.classList.add("active");
  form.style.display = "block";
  successMessage.style.display = "none";
  form.reset();
}

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("modal-close");
  const form = document.getElementById("modal-form");
  const successMessage = document.getElementById("modal-success");

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    form.style.display = "block";
    successMessage.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      form.style.display = "block";
      successMessage.style.display = "none";
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" }
    })
      .then((response) => {
        if (response.ok) {
          form.reset();
          form.style.display = "none";
          successMessage.style.display = "block";
        } else {
          alert("Ошибка при отправке. Попробуйте позже.");
        }
      })
      .catch(() => {
        alert("Ошибка сети.");
      });
  });
});
<script>
  document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".side-nav-glass");
    const navLinks = document.querySelectorAll(".side-nav-glass a");

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        // Проверка ширины экрана — только на мобильных
        if (window.innerWidth <= 768) {
          nav.classList.remove("show");
          nav.classList.add("hidden");
        }
      });
    });
  });
</script>

