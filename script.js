// modal.js

function openForm(serviceTitle) {
  const modal = document.getElementById("modal");
  const title = document.getElementById("modal-title");
  const form = document.getElementById("modal-form");

  title.textContent = serviceTitle;
  modal.classList.add("active");

  // Можно очистить поля формы при открытии
  form.reset();
}

// Закрытие по кнопке ✖
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("modal-close");

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  // Закрытие при клике вне модального окна
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
});
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
      headers: {
        Accept: "application/json",
      },
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
      .catch((error) => {
        alert("Ошибка сети.");
      });
  });
});
function toggleMenu() {
  const nav = document.getElementById('sideNav');
  nav.classList.toggle('show');
  nav.classList.toggle('hidden');
}
