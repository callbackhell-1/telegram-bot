# telegram-bot

A simple Telegram bot built with [Telegraf](https://telegraf.js.org/) and Node.js.

## Features

- Responds to `/start` with a welcome message.
- Responds to `/oldschool` with "Hello".
- Replies with a heart emoji to stickers.
- Handles `/defer` command by fetching and replying with the content of a remote JavaScript file.
- Replies "Yo !! Bro" when the message is "bro".
- Replies with a default message for any other text.

## Setup

1. Clone the repository.
2. Install dependencies:

   ```sh
   npm install