let input = document.querySelector("#message");
console.log(input);

let submitBtn = document.querySelector("#submit");
console.log(submitBtn);

let error = document.querySelector(".error");
console.log(error);

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let message = input.value;

  if (message.length === 0) {
    error.innerHTML = "Message can't be empty!";
    setTimeout(() => {
      error.innerHTML = "";
    }, 2000);
  } else {
    console.log(message);
    notification(message);
  }
  input.value = "";
});

input.addEventListener("focus", () => {
  error.innerHTML = "";
});

let notification = (msg) => {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      new Notification(msg, {
        body: "Sending by Dev!",
        icon: "assets/icon.jpg",
      });
    } else {
      alert("Notification is not allowed!");
    }
  });
};
