import TelegramBot from 'node-telegram-bot-api';


// replace the value below with the Telegram token you receive from @BotFather
const token = '5659748950:AAGC7gLBFlxMxlcuUMKlr6jqtliTRP3gm7Q';
const chatIds = -650670416;
const bot = new TelegramBot(token);

export function formater(tel = '', address = ''){
    return "Новая заявка\nТелефон: " + tel + "\nАдрес: " + address;
}


export function senders_(text) {
    bot.sendMessage(chatIds, text);
}

// bot.onText(/\/echo (.+)/, (msg, match) => {
//     const chatId = msg.chat.id;
//     const resp = `sas ${chatId}` // the captured "whatever"
//     bot.sendMessage(chatId, resp);
// });

// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//     console.log(chatId);
//     // send a message to the chat acknowledging receipt of their message
//     bot.sendMessage(chatId, 'Received your message');
// });

