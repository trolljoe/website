const fs = require("fs");
const io = require("socket.io")(3000, {
  cors: {
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST"],
  },
});

let profanityList = [];
let isProfanityWarning = false;

fs.readFile("profanity-list.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading profanity list:", err);
    return;
  }
  profanityList = data.split("\n").map((word) => word.trim().toLowerCase());
});

const users = {};

io.on("connection", (socket) => {
  socket.on("check-name", (name) => {
    if (isNameAvailable(name)) {
      socket.emit("name-available");
    } else {
      socket.emit("name-unavailable");
    }
  });
  socket.on("check-nsfw-name", (name) => {
    const cleanedUser = filterProfanity(name);
    if (cleanedUser !== name) {
      socket.emit("name-blocked");
      return null;
    }
  });
  socket.on("new-user", (name) => {
    users[socket.id] = name;
    socket.broadcast.emit("user-connected", name);
  });
  socket.on("send-chatmessage", (message) => {
    const cleanedMessage = filterProfanity(message);
    if (cleanedMessage !== message) {
      socket.emit("profanity-warning", "You sent a blocked word.");
      isProfanityWarning = true;
    }
    if (!isProfanityWarning) {
      socket.broadcast.emit("chat-message", {
        message: message,
        name: users[socket.id],
      });
    }
    socket.on("disconnect", () => {
      socket.broadcast.emit("user-disconnected", users[socket.id]);
      delete users[socket.id];
    });
  });
});

function isNameAvailable(name) {
  return !Object.values(users).includes(name);
}

function filterProfanity(message) {
  let words = message.toLowerCase().split(/\b/);
  for (let i = 0; i < words.length; i++) {
    if (profanityList.includes(words[i])) {
      words[i] = "*".repeat(words[i].length);
    }
  }
  return words.join("");
}
