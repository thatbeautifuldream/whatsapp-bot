// normal bot
const { Client } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

// setting up the whatsapp client
const client = new Client();

// generating the qr code
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

// authentication failure
client.on("auth_failure", (msg) => {
  console.error("AUTHENTICATION FAILURE", msg);
});

// on ready event
client.on("ready", () => {
  console.log("Client is ready");
});

// client initialization sets up event and kicks off the authentication request
client.initialize();

client.on("message", (message) => {
    console.log(message.body);
    message.reply("Hello World!");
});
