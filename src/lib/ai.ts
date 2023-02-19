import { Config } from "./validatedotenv";
import { Configuration, OpenAIApi } from "openai";

export const makeOpenAI = (config: Config) => {
  const configuration = new Configuration({
    apiKey: config.API_KEY
  });
  return new OpenAIApi(configuration);
};

// the any type for openAIApi is not ideal, but the openai api is not
//  properly typed for typescript
export const askGpt = async (prompt: string, openAIApi: any, config: Config) => {
  const completion = await openAIApi.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
  });
  return completion.data.choices[0].text;
}
