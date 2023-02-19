import { Config } from "./validatedotenv";

/* This function handles any chat sent by a user on the server
  * and responds sends a chat from ChatGPT if user is requesting that
  */
export const handleChat = async (username: string, message: string, config: Config) => {
  // check for user defined gpt prefix commmand
  if (message.startsWith(config.COMMAND)) {

  }
  // else do nothing
};
