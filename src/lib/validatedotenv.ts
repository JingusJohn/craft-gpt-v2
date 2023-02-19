import { z } from "zod";

export const configSchema = z.object({
  SERVER: z.string(),
  USERNAME: z.string(),
  PASSWORD: z.string(),
  API_KEY: z.string(),
  WAKE_MSG: z.string().optional(),
  COMMAND: z.string().default("GPT:"),
  MAX_TOKENS: z.number().default(100),
  AUTH: z.enum(["microsoft", "mojang"]).default("microsoft"),
  VERSION: z.string().optional(),
  CHAT_COLOR_PREFIX: z.string().default(""),
  PROMPT_PREFIX: z.string().default("This is a minecraft question."),
  PROMPT_SUFFIX: z.string().default(""),
  ADDRESS_PLAYER: z.boolean().default(false),
  BOT_NICKNAME_CMD: z.string().optional()
})

export type Config = z.TypeOf<typeof configSchema>;
