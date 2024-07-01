// i'm sorry for what you have to witness

const animationCheckbox = document.getElementById("animationCheckbox");

document.addEventListener("DOMContentLoaded", function () {
  var app = document.getElementById("app");

  var typewriter = new Typewriter(app, {
    loop: false,
  });

  typewriter.typeString("joetroll").start();
});

animationCheckbox.addEventListener("change", function () {
  const elementsWithAnimation = document.querySelectorAll(".crt, .container");
  if (this.checked) {
    elementsWithAnimation.forEach((element) => {
      element.style.animation = "none";
      element.style.textShadow = "none";
      element.classList.add("animations-stopped");
    });
  } else {
    elementsWithAnimation.forEach((element) => {
      element.style.removeProperty("animation");
      element.style.removeProperty("text-shadow");
      element.classList.remove("animations-stopped");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var chatroomPlaceholder = document.getElementById("chatroom-placeholder");
  var chatroom = document.getElementById("chatroom");

  chatroomPlaceholder.addEventListener("click", function () {
    chatroom.classList.toggle("open");
  });

  var sendContainer = document.getElementById("send-container");
  var messageInput = document.getElementById("message-input");
  var messageContainer = document.getElementById("message-container");

  sendContainer.addEventListener("submit", function (e) {
    e.preventDefault();
    var message = messageInput.value.trim();
    if (message !== "") {
      var messageElement = document.createElement("p");
      messageElement.textContent = message;
      messageContainer.appendChild(messageElement);
      messageInput.value = "";
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
  });
});
