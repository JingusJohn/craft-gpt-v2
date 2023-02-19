# craft-gpt-v2

This allows a bot to join your minecraft server and communicate on behalf of the ChatGPT API.

Created by Jack Branch

## Usage

1. Clone the project `git clone https://github.com/JingusJohn/craft-gpt-v2`
2. `cd` into the project directory.
3. Run the project with `npm run start`
  - Requires a Minecraft account
  - Must have Node.js version >= 14
  - Must have a valid `.env` configuration. See [here](#configuration-options)

## Technologies Utilized
- Node with Typescript
- [Mineflayer](https://github.com/PrismarineJS/mineflayer)
- [Zod](https://zod.dev) for validation of configuration
- [OpenAI API](https://openai.com/api/) with the official [npm package](https://openai.com/api/)

## Configuration Options

You must configure your project using a `.env` file in the project directory or
renaming the empty one included in the project. It shows what all things can be configured
but you can also read more about that here. Optional fields have default values. If there
is no indicated default, then the option is mandatory. You will get build errors if they
are neglected.

### Server `.env/SERVER`

This option is where you set the hostname of the server. For local use, use "localhost".

### **Username** `.env/USERNAME`

This option sets the username of the bot.

### **Password** `.env/PASSWORD`

This option sets the password of the bot.

### **API Key** `.env/API_KEY`

This option sets the API key for authenticating with OpenAI.

### Wake Message `.env/WAKE_MSG` *default* 

This option sets the message that the bot sends when it connects to the server. This is
useful for testing that your bot is connecting properly. It's also useful for adding personality
to your bot if that's something that matters to you.

### Command `.env/COMMAND` *default* "GPT:"

This option allows the user to set the prefix for chat messages addressing your chatGPT API.
By default, it is simply "GPT:". Prefixing any minecraft chat message with this prefix will
cause your message to be directed to ChatGPT. If you wish for every message to be directed to
ChatGPT, then set the prefix to an empty string in the .env file as shown below. For any other
configuration, just fill the quotes with something else. Ideally something short and memorable.

```
COMMAND=""
```

### Max Tokens `.env/MAX_TOKENS` *default* 100

This option sets a maximum tokens for the ChatGPT API to generate. This is useful for limiting
the length of the responses to either clutter the chat less or to save some money on token
generation.

### Auth `.env/AUTH` *default* "microsoft"

This option sets the authorization technique for the bot. The options include:

- microsoft *default*
- mojang

### Version `.env/VERSION` *default* Whatever's newest

This option allows the user to set the version of minecraft. This is important for backwards
compatibility. Set this as a string.

### Chat Color Prefix `.env/CHAT_COLOR_PREFIX` *default* empty string

This option allows the user to set a prefix for formatting the text of the GPT output. Some
server plugins may be required depending on what you set for this. Certain plugins may enhance
the effect.

### Prompt Prefix `.env/PROMPT_PREFIX` *default* "This is a minecraft question."

When you ask ChatGPT a question, this string will be prepended to the question string. This
allows you to tune the output by providing some extra context for ChatGPT. Can also be used to
influence the AI's attitude. You can ask it to insult you for example.

### Prompt Suffix `.env/PROMPT_SUFFIX` *default* empty string

This option is similar to the prefix but instead of being prepended to the question string, it
will be appended to the question string. This can also be used for adding context or attitude.

### Address Player `.env/ADDRESS_PLAYER` *default* false

If true, "Address me as `username`. " will be prepended to the question string. This way you can
get more personalized output since the bot can address the player by name.

### Bot Nickname Command`.env/BOT_NICKNAME_CMD` *default* none

This allows user to set a nickname configuration to the Bot on wake. Since nickname plugins can
vary some in usage, for this value, you would set a string for the command. Example:

```
BOT_NICKNAME_CMD="/nick GPT"
```
