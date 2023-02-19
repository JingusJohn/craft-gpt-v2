import { createBot, Bot, BotOptions } from "mineflayer";
import { askGpt, makeOpenAI } from "./lib/ai";
import { makeBotOptions } from "./lib/botConfig";
import { handleChat } from "./lib/chathandler";
import { configSchema } from "./lib/validatedotenv";
import * as dotenv from "dotenv";

// load environment variables defined in .env
dotenv.config();

const configurations = configSchema.parse(process.env);

const botOptions: BotOptions = makeBotOptions(configurations);

// const bot: Bot = createBot(botOptions);

// bot.on('wake', () => {
//   // announce its wokeness
//   bot.chat(configurations.WAKE_MSG ?? `${bot.username}? NO, I am GPT-3!`);
//   // set its nickname to gpt-3 or user-defined nickname
//   //bot.chat('/nick ')
// })

// bot.on('chat', ( username, message ) => {
//   // ignore chats sent by the bot
//   if (username === bot.username) return;
//   // handle chat from user
//   handleChat(username, message, configurations);
// })

async function main() {
  // currently just tesing
  const api = makeOpenAI(configurations);

  console.log(await askGpt("Say this is a test", api, configurations));
}

main();

