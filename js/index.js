const currentYear = document.getElementById("current__year");

currentYear.textContent = new Date().getFullYear();

const cards__container = document.getElementById("cards__container");
// const template = document.getElementById("cards__template");
const template = document.querySelector("template");

function updateUi(directory) {
  directory.forEach((director) => {
    const clone = template.content.cloneNode(true);

    const directory__img = clone.querySelector(".directory__img");
    const directory__name = clone.querySelector(".directory__name");
    const directory__position = clone.querySelector(".directory__position");

    directory__img.src = director.avatar;
    directory__name.textContent = director.name;
    directory__position.textContent = director.position;

    cards__container.appendChild(clone);
  });
}

function loading(status = false) {
  if (status) {
    document.querySelector(".loader").classList.remove("hidden");
  } else {
    document.querySelector(".loader").classList.add("hidden");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loading(true);
  fetch("http://localhost:3000/directory")
    .then((data) => {
      return data.json();
    })
    .then((directory) => {
      updateUi(directory);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      loading(false);
    });
});
