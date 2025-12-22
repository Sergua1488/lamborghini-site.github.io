const form = document.getElementById("registerForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
  };

  localStorage.setItem("user", JSON.stringify(user));

  successMessage.textContent = `Добро пожаловать, ${user.name}! Вы успешно зарегистрированы.`;
  form.reset();

  setTimeout(() => (successMessage.textContent = ""), 4000);
});

const reviewForm = document.getElementById("reviewForm");
const reviewsList = document.getElementById("reviewsList");

reviewForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("username").value;
  const comment = document.getElementById("comment").value;

  const review = { name, comment };
  const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];

  savedReviews.push(review);
  localStorage.setItem("reviews", JSON.stringify(savedReviews));

  addReviewToPage(review, savedReviews.length - 1);
  reviewForm.reset();
});

function addReviewToPage(review, index) {
  const reviewDiv = document.createElement("div");
  reviewDiv.classList.add("review");
  reviewDiv.innerHTML = `
    <h3>${review.name}</h3>
    <p>${review.comment}</p>
    <button class="delete-btn" data-index="${index}">Удалить</button>
  `;
  reviewsList.appendChild(reviewDiv);

  reviewDiv
    .querySelector(".delete-btn")
    .addEventListener("click", (e) => deleteReview(e.target.dataset.index));
}

function deleteReview(index) {
  let savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
  savedReviews.splice(index, 1);
  localStorage.setItem("reviews", JSON.stringify(savedReviews));

  reviewsList.innerHTML = "";
  savedReviews.forEach((r, i) => addReviewToPage(r, i));
}

window.addEventListener("load", () => {
  const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviewsList.innerHTML = "";
  savedReviews.forEach((r, i) => addReviewToPage(r, i));
});

document.getElementById("buy1").addEventListener("click", function () {
  alert("Поздравляю, вы оформили заказ, через 30 минут доставим!");
});

document.getElementById("buy2").addEventListener("click", function () {
  alert("Поздравляю, вы оформили заказ, через 30 минут доставим!");
});

document.getElementById("buy3").addEventListener("click", function () {
  alert("Поздравляю, вы оформили заказ, через 30 минут доставим!");
});

document.getElementById("buy4").addEventListener("click", function () {
  alert("Поздравляю, вы оформили заказ, через 30 минут доставим!");
});

document.getElementById("buy5").addEventListener("click", function () {
  alert("Поздравляю, вы оформили заказ, через 30 минут доставим!");
});

document.getElementById("buy6").addEventListener("click", function () {
  alert("Поздравляю, вы оформили заказ, через 30 минут доставим!");
});
