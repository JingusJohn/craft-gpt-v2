import { Config } from "./validatedotenv";
import { Configuration, OpenAIApi } from "openai";
import { api } from "../main";

export const makeOpenAI = (config: Config) => {
  const configuration: Configuration = new Configuration({
    apiKey: config.API_KEY
  });
  return new OpenAIApi(configuration);
};

// the any type for openAIApi is not ideal, but the openai api is not
//  properly typed for typescript
export const askGpt = async (prompt: string, config: Config) => {
  const completion = await api.createCompletion(
    {
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: config.MAX_TOKENS
    },
    {

    }
  );
  return completion.data.choices[0].text;
}

export const makePrompt = (username: string, message: string, config: Config) => {
  let prompt: string = "";
  prompt += config.PROMPT_PREFIX + " ";
  if (config.ADDRESS_PLAYER === "true") {
    prompt += `Address me as ${username}. `;
  }
  prompt += message;
  prompt += " " + config.PROMPT_SUFFIX;

  return prompt;
}
