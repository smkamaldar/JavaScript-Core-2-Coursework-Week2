const jumbotron = document.querySelector(".jumbotron");
const blueButton = document.querySelector("#blueBtn");
const donateBike = jumbotron.querySelector(".btn-primary");
const volunteer = jumbotron.querySelector(".btn-secondary");

const orangeButton = document.querySelector("#orangeBtn");
const greenButton = document.querySelector("#greenBtn");

const submit = document.querySelector("form button");
const form = document.querySelector("form");
const inputs = form.querySelectorAll(".form-control");

blueButton.addEventListener("click", () => {
  jumbotron.style.backgroundColor = "588fbd";
  donateBike.style.backgroundColor = "ffa500";
  volunteer.style.backgroundColor = "black";
  volunteer.style.color = "white";
});

orangeButton.addEventListener("click", () => {
  jumbotron.style.backgroundColor = "f0ad4e";
  donateBike.style.backgroundColor = "5751fd";
  volunteer.style.backgroundColor = "31b0d5";
  volunteer.style.color = "white";
});

greenButton.addEventListener("click", () => {
  jumbotron.style.backgroundColor = "87ca8a";
  donateBike.style.backgroundColor = "black";
  volunteer.style.backgroundColor = "8c9c08";
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let hasError = false;
  inputs.forEach((input) => {
    if (!input.value.length) {
      input.style.backgroundColor = "red";
      hasError = true;
    }
    if (input.type === "email" && !input.value.includes("@")) {
      input.style.backgroundColor = "red";
      hasError = true;
    }
  });
  if (!hasError) {
    alert("thank you for filling out the form");
    // for reseting form
    // inputs.forEach(input=>{
    //     input.value = "";
    // });
    form.reset();
  }
});
