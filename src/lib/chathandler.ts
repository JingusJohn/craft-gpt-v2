import { bot } from "../main";
import { askGpt, makePrompt } from "./ai";
import { Config } from "./validatedotenv";

/* This function handles any chat sent by a user on the server
  * and responds sends a chat from ChatGPT if user is requesting that
  */
export const handleChat = async (username: string, message: string, config: Config) => {
  // check for user defined gpt prefix commmand
  if (config.DEBUG === "on") {
    bot.chat("made it here")
    console.log(`Chat registed from "${username}" saying "${message}".`);
  }
  if (message.startsWith(config.COMMAND)) {
    if (config.DEBUG === "on") {
      bot.chat("I see your message, and I hate you");
      console.log(`Command prefix "${config.COMMAND}" found.`);
    }
    const prompt: string = makePrompt(username, message.split(config.COMMAND)[1], config);
    if (config.DEBUG === "on") {
      console.log("PROMPT: ", prompt);
    }
    const response = await askGpt(prompt, config);
    if (response) {
      if (config.DEBUG === "on") {
        console.log('GPT-RESPONSE: ', response);
      }
      bot.chat(response);
    }
  }
  // do nothing if not directed to bot
};
