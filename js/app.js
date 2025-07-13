const currentYear = document.getElementById("current__year");

currentYear.textContent = new Date().getFullYear();

const template = document.getElementById("testemonials-template");

const testemonials__list = document.getElementById("testemonials__list");

function updateUi(testemonials) {
  testemonials.forEach((testemonial) => {
    const clone = template.content.cloneNode(true);

    const testimonailas__description = clone.querySelector(
      ".testimonailas__description"
    );

    const testimonials__name = clone.querySelector(".testimonials__name");
    const testemonials__positon = clone.querySelector(".testemonials__positon");
    const testemonials__avatar = clone.querySelector(".testemonials__avatar");

    testimonials__name.textContent = testemonial.name;
    testimonailas__description.textContent = testemonial.description;
    testemonials__positon.textContent = testemonial.position;
    testemonials__avatar.src = testemonial.avatar;

    testemonials__list.appendChild(clone);
  });
}

// loading func

function loading(status = false) {
  if (status) {
    document.querySelector(".loader").classList.remove("hidden");
  } else {
    document.querySelector(".loader").classList.add("hidden");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loading(true);
  fetch("http://localhost:3000/testemonials")
    .then((data) => {
      return data.json();
    })
    .then((testemonials) => {
      updateUi(testemonials);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      loading(false);
    });
});
