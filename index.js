// open ai bot
const { Client } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

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

// setting up the openai configuration
const configuration = new Configuration({
  apiKey: process.env.SECRET_KEY,
});

// setting up the openai client
const openai = new OpenAIApi(configuration);


async function runCompletion(message) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
    max_tokens: 200,
  });
  return completion.data.choices[0].text;
}

client.on("message", async (message) => {
  console.log(message.body);
    const response = await runCompletion(message.body);
    console.log(response);
    message.reply(response);
});
