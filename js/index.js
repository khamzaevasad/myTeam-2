const currentYear = document.getElementById("current__year");

currentYear.textContent = new Date().getFullYear();

const template = document.querySelector("template");
const cards__container = document.getElementById("cards__container");

function updateUI(directory) {
  directory.forEach((item) => {
    const clone = template.content.cloneNode(true);

    const directory__img = clone.querySelector(".directory__img");
    const directory__name = clone.querySelector(".directory__name");
    const directory__position = clone.querySelector(".directory__position");

    directory__img.src = item.avatar;
    directory__name.textContent = item.name;
    directory__position.textContent = item.position;

    cards__container.appendChild(clone);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/directory")
    .then((data) => {
      return data.json();
    })
    .then((directory) => {
      updateUI(directory);
    })
    .catch((error) => {
      console.log(error);
    });
});
