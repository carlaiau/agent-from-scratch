import OpenAI from 'openai'

const getWeather = async () => `hot, 30 deg, no wind`

export const runTool = async ({
  toolCall,
  userMessage,
}: {
  toolCall: OpenAI.Chat.Completions.ChatCompletionMessageToolCall
  userMessage: string
}) => {
  const input = {
    userMessage,
    toolArgs: JSON.parse(toolCall.function.arguments || '{}'),
  }
  switch (toolCall.function.name) {
    case 'get_weather':
      return getWeather(input)
    default:
      throw new Error(`Unknown tool : ${toolCall.function.name}`)
  }
}
