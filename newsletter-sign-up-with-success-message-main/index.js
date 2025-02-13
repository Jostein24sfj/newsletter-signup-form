const modal = document.getElementById("modal");
console.log(modal);

const card = document.getElementById("card");
console.log(card);

const btn = document.getElementById("btn");

btn.onclick = function () {};

window.onclick = function (event) {
  if (event.target == card) {
    card.style.display = "none";
  }
};

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
