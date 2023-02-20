import { z } from "zod";

export const configSchema = z.object({
  SERVER: z.string({
    required_error: "Server is required and cannot be an empty string"
  }).min(4),
  USERNAME: z.string({
    required_error: "Username is required and cannot be an empty string"
  }).min(1),
  PASSWORD: z.string({
    required_error: "Password is required and cannot be an empty string"
  }).min(8),
  API_KEY: z.string({
    required_error: "API_KEY is required and cannot be an empty string"
  }).min(20),
  PORT: z.number().default(25565),
  WAKE_MSG: z.string().optional(),
  COMMAND: z.string().default("GPT:"),
  MAX_TOKENS: z.number().default(100),
  AUTH: z.enum(["microsoft", "mojang"]).default("microsoft"),
  VERSION: z.string().optional(),
  PROMPT_PREFIX: z.string().default("This is a minecraft question."),
  PROMPT_SUFFIX: z.string().default(""),
  ADDRESS_PLAYER: z.enum(["true", "false"]).default("false"),
  DEBUG: z.enum(["on", "off"]).default("off")
})

export type Config = z.TypeOf<typeof configSchema>;
