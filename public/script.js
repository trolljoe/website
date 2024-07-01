const socket = io("http://localhost:3000");
const messageform = document.getElementById("send-container");
const messagecontainer = document.getElementById("message-container");
const messageelement = document.getElementById("message-input");

function askForName() {
  name = prompt("What's your name?");

  if (name && name.trim() !== "") {
    socket.emit("check-name", name);
  } else {
    alert("Please enter a valid name.");
    askForName();
  }
}

askForName();

socket.on("chat-message", (data) => {
  showMessage(`${data.name}: ${data.message}`);
});

socket.on("user-connected", (name) => {
  showMessage(`SYSTEM: ${name} has joined the chatroom.`);
});

socket.on("user-disconnected", (name) => {
  showMessage(`SYSTEM: ${name} has left the chatroom. :(`);
});

socket.on("name-unavailable", () => {
  alert("This name is already taken. Please choose another name.");
  askForName();
});

socket.on("name-blocked", () => {
  alert("This name is blocked. Please choose another name.");
  askForName();
});

socket.on("name-available", () => {
  showMessage("SYSTEM: You joined the chatroom.");
  socket.emit("new-user", name);
});

socket.on("profanity-warning", (warning) => {
  showMessage(`SYSTEM WARNING: ${warning}`);
});

messageform.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = messageelement.value;
  if (message === "") {
    alert("You cannot send blank messages.");
    return;
  }
  showMessage(`${name} (You): ${message}`);
  socket.emit("send-chatmessage", message);
  messageelement.value = "";
});

function showMessage(message) {
  const messageServer = document.createElement("div");
  messageServer.innerText = message;
  messagecontainer.append(messageServer);
}
