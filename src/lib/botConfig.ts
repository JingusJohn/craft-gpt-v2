import { BotOptions } from "mineflayer"
import { Config } from "./validatedotenv";

export const makeBotOptions = (configurations: Config): BotOptions => {
  let botOptions: BotOptions ={
    host: configurations.SERVER,
    username: configurations.USERNAME,
    password: configurations.PASSWORD,
    auth: configurations.AUTH
  };
  if (configurations.PORT) {
    botOptions.port = configurations.PORT;
  }
  if (configurations.VERSION) {
    botOptions.version = configurations.VERSION;
  }

  return botOptions;
};
