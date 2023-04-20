# Whatsapp Bot Template

This is a template for a whatsapp bot. It is written in JavaScript and uses the [whatsapp-web.js](https://wwebjs.dev/) library.

## Setup

- Clone the template repository
- Run `npm install` to install the dependencies

## Usage

- Setup the environment variables in the `.env` file, you can get the API key from [OpenAI](https://openai.com/)

```bash
OPENAI_API_KEY="YOUR_OPENAI_API_KEY"
```

- Run `npm run openai-bot` to start the openai bot (this will use the openai api to generate responses from the file `index.js`)
- Run `npm run simple-bot` to start the simple bot (this will use a simple response which you can customise in the `app.js` file)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.