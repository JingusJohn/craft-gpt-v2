import { createBot, Bot, BotOptions } from "mineflayer";
import { makeOpenAI } from "./lib/ai";
import { makeBotOptions } from "./lib/botConfig";
import { handleChat } from "./lib/chathandler";
import { configSchema } from "./lib/validatedotenv";
import * as dotenv from "dotenv";

// load environment variables defined in .env
dotenv.config();

// take environment variables and validate them
const configurations = configSchema.parse(process.env);

// create configuration options object specifically for bot
const botOptions: BotOptions = makeBotOptions(configurations);

// make mineflayer bot instance
export const bot: Bot = createBot(botOptions);

// make openai instance
export const api = makeOpenAI(configurations);

//
bot.on('spawn', () => {
  // announce its wokeness
  bot.chat(configurations.WAKE_MSG ?? `${bot.username}? NO, I am GPT-3!`);
  // set its nickname to gpt-3 or user-defined nickname
  //bot.chat('/nick ')
})

bot.on('chat', ( username, message ) => {
  // ignore chats sent by the bot
  if (username === bot.username) return;
  // handle chat from user
  handleChat(username, message, configurations);
})

