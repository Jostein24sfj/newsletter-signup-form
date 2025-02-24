const modal = document.getElementById("modal");
console.log(modal);

const card = document.getElementById("card");
console.log(card);

const btn = document.getElementById("btn");
const modalBtn = document.getElementById("modalBtn");

const emailInput = document.querySelector(".email input");
console.log(emailInput);

// function isValidEmail(email) {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

btn.onclick = function () {};
const emailValue = emailInput.value.trim();

if (!isValidEmail(emailValue)) {
  alert("Please enter a valid email adress.");
}

btn.addEventListener("click"),
  function () {
    const emailValue = emailInput.value.trim();

    btn.onclick = function (event) {
      // if (event.target == card) {
      card.style.display = "none";
      modal.style.display = "block";
      // }
    };

    modalBtn.onclick = function (event) {
      // if (event.target == card) {
      card.style.display = "flex";
      modal.style.display = "none";
      emailInput.value = "";
      // }
    };

    // window.onclick = function (event) {
    //   if (event.target == modal) {
    //     modal.style.display = "none";
    //   }
    // };
  };
