const currentYear = document.getElementById("current__year");

currentYear.textContent = new Date().getFullYear();

const template = document.querySelector("template");
const cards__container = document.getElementById("cards__container");

function updateUI(directory) {
  directory.forEach((item) => {
    if (item.type === "profile") {
      const clone = template.content.cloneNode(true);

      const directory__img = clone.querySelector(".directory__img");
      const directory__name = clone.querySelector(".directory__name");
      const directory__position = clone.querySelector(".directory__position");

      directory__img.src = item.avatar;
      directory__name.textContent = item.name;
      directory__position.textContent = item.position;

      cards__container.appendChild(clone);
    } else if (item.type === "quote") {
      const aden = document.createElement("div");
      aden.className = "quote__card";

      aden.innerHTML = `
      <div class = "quote__description">
        <h3 class = "quote__name">${item.name}</h3>
        <p class = "quote__quote">${item.description}</p>
      </div>
      <div class = "quote__social">
      <a href="${item.twitter}">
        <img src="../../assets/icon-twitter.svg" alt="twitter">
      </a>
      <a href="${item.linkedin}">
       <img src="../../assets/icon-linkedin.svg" alt="linkedin">
      </a>
      </div>
      <div class = "quote__more">
      <img class = "quote__icon" src="../../assets/icon-cross.svg" alt="linkedin">
      </div>
      `;
      cards__container.appendChild(aden);
    }
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
